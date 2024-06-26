import { dbConn } from '../../dbConn.js';
import { changeLangByEMail } from '../../backendUtils.js';
import { fail, redirect } from '@sveltejs/kit';
import jwt from 'jsonwebtoken';
import { JWT_SECRET } from '$env/static/private';

export async function load({ locals }) {
	if (!locals.authedUser) {
		redirect(302, '/login');
	}
}

export const actions = {
	lang: async ({ cookies, request }) => {
		const langForm = await request.formData();
		const newLang = langForm.get('lang');
		const currentLang = cookies.get('lang');

		let langChangeResponse = {
			lang: newLang,
			error: true,
			langUnchanged: false,
		};

		if (newLang === currentLang) {
			langChangeResponse.error = false;
			langChangeResponse.langUnchanged = true;
			return fail(200, langChangeResponse);
		}

		const collection = await dbConn();

		// --- Get email from Auth Token --- //
		const authToken = cookies.get('authToken');
		try {
			const claims = jwt.verify(authToken, JWT_SECRET);

			if (authToken && claims) {
				// --- Change Language --- //
				try {
					const langChanged = await changeLangByEMail(collection, claims.email, newLang);
					if (langChanged === null) {
						langChangeResponse.error = true;
						return fail(400, langChangeResponse);
					}
					// --- Success --- //
					langChangeResponse.error = false;
					langChangeResponse.lang = newLang;
					cookies.set('lang', newLang, { maxAge: 60 * 60 * 24 * 7, path: '/' });
				} catch (error) {
					langChangeResponse.error = true;
					console.error(error);
					return fail(500, langChangeResponse);
				}
			}
		} catch (error) {
			console.error(error);
			return fail(500, langChangeResponse);
		}
	},
};
