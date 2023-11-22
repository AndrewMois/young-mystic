import { dbConn } from '../../dbConn';
import { fail, redirect } from '@sveltejs/kit';
import { createUserToRegister, registerUser, returnEmailsList, returnYLIDsList } from '../../backendUtils.js';
import { checkPassword } from '../../passwordCheck.js';

export const actions = {
	signup: async ({ request }) => {
		const signupFormData = await request.formData();
		const ylid = signupFormData.get('ylid') ?? '';
		const firstName = signupFormData.get('firstName') ?? '';
		const lastName = signupFormData.get('lastName') ?? '';
		const email = signupFormData.get('email') ?? '';
		const password = signupFormData.get('password') ?? '';
		const passwordRepeat = signupFormData.get('passwordRepeat') ?? '';

		let SignUpResponse = {
			emailUsed: false,
			weakPassword: false,
			passwordDiffer: false,
			error: false,
			idTaken: false,
			errorMessages: [],
			firstName,
			lastName,
			email,
			ylid,
			password: '',
			passwordRepeat: '',
		};

		// --- General Checks --- //

		if ((firstName === '') || (lastName === '') || (email === '') || (ylid === '') || (password === '') || (passwordRepeat === '')) {
			SignUpResponse.error = true;
			SignUpResponse.errorMessages.push('Make sure you fill out all fields!');
			return fail(400, SignUpResponse);
		}

		const collection = await dbConn();

		// --- YLID Check --- //

		let ylIDList = [];

		try {
			ylIDList = await returnYLIDsList(collection);
		} catch (error) {
			SignUpResponse.error = true;
			SignUpResponse.errorMessages.push(error.message || 'Error Connecting to DB');
			return fail(400, SignUpResponse);
		}

		if (ylIDList.includes(ylid.toString())) {
			SignUpResponse.error = true;
			SignUpResponse.errorMessages.push('This ID is already in use!');
			SignUpResponse.idTaken = true;
			// return fail(400, SignUpResponse);
		}

		// --- Email Check --- //

		let emailList = [];

		try {
			emailList = await returnEmailsList(collection);
			if (emailList.includes(email.toString())) {
				SignUpResponse.error = true;
				SignUpResponse.emailUsed = true;
				SignUpResponse.errorMessages.push('This email address has already been used!');
				// return fail(400, SignUpResponse);
			}
		} catch (error) {
			SignUpResponse.error = true;
			SignUpResponse.errorMessages.push('Error confirming email is available! Try again shortly!');
			return fail(500, SignUpResponse);
		}

		// --- Password Check --- //
		SignUpResponse.password = password;
		SignUpResponse.passwordRepeat = passwordRepeat;
		const isPassStrong = checkPassword(password.toString());

		if (!isPassStrong) {
			SignUpResponse.weakPassword = true;
			SignUpResponse.error = true;
			SignUpResponse.errorMessages.push('Password is too weak! Follow password requirements!');
			// return fail(400, SignUpResponse);
		}

		if (password !== passwordRepeat) {
			SignUpResponse.error = true;
			SignUpResponse.passwordDiffer = true;
			SignUpResponse.errorMessages.push('Passwords do not match!');
			// return fail(400, SignUpResponse);
		}

		if (SignUpResponse.error) {
			return fail(400, SignUpResponse);
		}

		const userToInsert = await createUserToRegister(SignUpResponse);
		const resultOfInsert = await registerUser(collection, userToInsert);
		if (resultOfInsert.acknowledged && resultOfInsert.insertedId) throw redirect(303, '/login');
		else {
			SignUpResponse.password = '';
			SignUpResponse.error = true;
			SignUpResponse.errorMessages.push('Error registering user.');
			return fail(503, SignUpResponse);
		}
	},
};
