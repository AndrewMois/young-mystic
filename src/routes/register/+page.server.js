import { dbConn } from '../../dbConn';
import { fail, redirect } from '@sveltejs/kit';
import { createUserToRegister, registerUser, returnEmailsList, returnYLIDsList } from '../../backendUtils.js';
import { checkPassword } from '../../passwordCheck.js';
import locales from '$lib/locales/register/locales.json';

export async function load({ locals }) {
	if (locals.authedUser) {
		redirect(302, '/');
	}
}

export const actions = {
	signup: async ({ request }) => {
		const signupFormData = await request.formData();
		const ylid = signupFormData.get('ylid').trim() ?? '';
		const firstName = signupFormData.get('firstName').trim() ?? '';
		const lastName = signupFormData.get('lastName').trim() ?? '';
		const email = signupFormData.get('email').toLowerCase().trim() ?? '';
		const password = signupFormData.get('password') ?? '';
		const passwordRepeat = signupFormData.get('passwordRepeat') ?? '';
		let lang = signupFormData.get('lang') ?? 'ru'; // default language

		let SignUpResponse = {
			emailUsed: false,
			weakPassword: false,
			passwordDiffer: false,
			error: false,
			idTaken: false,
			errorMessages: [],
			firstName,
			lastName,
			lang,
			email,
			ylid,
			password: '',
			passwordRepeat: ''
		};

		// --- General Checks --- //

		if ((firstName === '') || (lastName === '') || (email === '') || (ylid === '') || (password === '') || (passwordRepeat === '')) {
			SignUpResponse.error = true;
			SignUpResponse.errorMessages.push(locales.fillAllFields[lang]);
			return fail(400, SignUpResponse);
		}

		const collection = await dbConn();

		// --- YLID Check --- //

		let ylIDList = [];

		try {
			ylIDList = await returnYLIDsList(collection);
		} catch (error) {
			SignUpResponse.error = true;
			SignUpResponse.errorMessages.push(error.message || locales.errorDBConnection[lang]);
			return fail(400, SignUpResponse);
		}

		if (ylIDList.includes(ylid.toString())) {
			SignUpResponse.error = true;
			SignUpResponse.errorMessages.push(locales.errorYLIDUsed[lang]);
			SignUpResponse.idTaken = true;
			// return fail(400, SignUpResponse);
		}

		// -- Language Check -- //
		const supportedLanguages = ['ru', 'ua', 'en'];
		if (!supportedLanguages.includes(lang)) {
			lang = 'ru'; // fallback language
		}

		// --- Email Check --- //

		let emailList = [];

		try {
			emailList = await returnEmailsList(collection);
			if (emailList.includes(email.toString())) {
				SignUpResponse.error = true;
				SignUpResponse.emailUsed = true;
				SignUpResponse.errorMessages.push(locales.errorEmailUsed[lang]);
				// return fail(400, SignUpResponse);
			}
		} catch (error) {
			SignUpResponse.error = true;
			SignUpResponse.errorMessages.push(locales.errorCheckEmail[lang]);
			return fail(500, SignUpResponse);
		}

		// --- Password Check --- //
		SignUpResponse.password = password;
		SignUpResponse.passwordRepeat = passwordRepeat;
		const isPassStrong = checkPassword(password.toString());

		if (!isPassStrong) {
			SignUpResponse.weakPassword = true;
			SignUpResponse.error = true;
			SignUpResponse.errorMessages.push(locales.errorWeakPassword[lang]);
			// return fail(400, SignUpResponse);
		}

		if (password !== passwordRepeat) {
			SignUpResponse.error = true;
			SignUpResponse.passwordDiffer = true;
			SignUpResponse.errorMessages.push(locales.errorPasswordNotMatch[lang]);
			// return fail(400, SignUpResponse);
		}

		if (SignUpResponse.error) {
			return fail(400, SignUpResponse);
		}

		const userToInsert = await createUserToRegister(SignUpResponse);
		const resultOfInsert = await registerUser(collection, userToInsert);
		if (resultOfInsert.acknowledged && resultOfInsert.insertedId) redirect(303, '/login');
		else {
			SignUpResponse.password = '';
			SignUpResponse.error = true;
			SignUpResponse.errorMessages.push(locales.errorRegister[lang]);
			return fail(503, SignUpResponse);
		}
	}
};
