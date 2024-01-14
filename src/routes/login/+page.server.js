import { dbConn } from '../../dbConn';
import { fail, redirect } from '@sveltejs/kit';
import {
	checkBlockedbyEmail,
	checkPassword,
	checkPendingbyEmail,
	findUserByEmailWithPassword,
	getLangByEMail,
} from '../../backendUtils.js';
import { JWT_SECRET } from '$env/static/private';
import jwt from 'jsonwebtoken';
import locales from '$lib/locales/login/locales.json';

export const actions = {
	login: async ({ cookies, request }) => {
		const loginFormData = await request.formData();
		const email = loginFormData.get('email').toLowerCase().trim() ?? '';
		const password = loginFormData.get('password') ?? '';
		const lang = loginFormData.get('lang') ?? 'ru'; // default language

		let LoginResponse = {
			invalidCredentials: false,
			error: false,
			errorMessage: '',
			email,
			password: '',
			pending: false,
			blocked: false,
		};

		// --- General Checks --- //

		if (email === '' || password === '') {
			LoginResponse.error = true;
			LoginResponse.errorMessage = locales.errorEmptyFields[lang];
			return fail(400, LoginResponse);
		}

		const collection = await dbConn();

		// --- Email Check --- //
		try {
			const userAttemptingLogin = await findUserByEmailWithPassword(collection, email);
			if (userAttemptingLogin === null) {
				LoginResponse.error = true;
				LoginResponse.invalidCredentials = true;
				LoginResponse.errorMessage = locales.errorInvalidCredentials[lang];
				return fail(400, LoginResponse);
			}
		} catch (error) {
			LoginResponse.error = true;
			LoginResponse.errorMessage = locales.errorCannotCheck[lang];
			return fail(500, LoginResponse);
		}

		// --- Password Check --- //
		LoginResponse.password = password;
		try {
			const passwordValid = await checkPassword(collection, email, password);
			if (!passwordValid) {
				LoginResponse.error = true;
				LoginResponse.invalidCredentials = true;
				LoginResponse.errorMessage = locales.errorInvalidCredentials[lang];
				return fail(400, LoginResponse);
			}
		} catch (error) {
			LoginResponse.errorMessage = error.message;
		}

		// --- Pending Check --- //
		try {
			const userPending = await checkPendingbyEmail(collection, email);
			if (userPending === null) {
				LoginResponse.error = true;
				LoginResponse.errorMessage = locales.errorTryAgain[lang];
				return fail(500, LoginResponse);
			} else if (userPending === true) {
				LoginResponse.pending = true;
				return fail(400, LoginResponse);
			}
		} catch (error) {
			LoginResponse.errorMessage = error.message;
		}

		// --- Blocked Check --- //
		try {
			const userBlocked = await checkBlockedbyEmail(collection, email);
			if (userBlocked === null) {
				LoginResponse.error = true;
				LoginResponse.errorMessage = locales.errorTryAgain[lang];
				return fail(500, LoginResponse);
			} else if (userBlocked === true) {
				LoginResponse.blocked = true;
				return fail(400, LoginResponse);
			}
		} catch (error) {
			LoginResponse.errorMessage = error.message;
		}

		// --- Set language --- //
		try {
			const langFromDB = await getLangByEMail(collection, email);
			if (langFromDB !== null && langFromDB !== undefined) {
				LoginResponse.lang = langFromDB;
			} else {
				LoginResponse.lang = 'ru'; // fallback language
			}
			cookies.set('lang', langFromDB, { maxAge: 60 * 60 * 24 * 7 });
		} catch (error) {
			LoginResponse.errorMessage = error.message;
		}

		// Return a user mb or during auth with token?
		LoginResponse.invalidCredentials = false;
		const authToken = jwt.sign({ email: email }, JWT_SECRET, { expiresIn: '168h' });
		cookies.set('authToken', authToken, {
			httpOnly: true,
			maxAge: 60 * 60 * 24 * 7,
			sameSite: 'strict',
		});
		throw redirect(302, '/');
	},
};
