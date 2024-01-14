import { dbConn } from '../../dbConn.js';
import { changeLangByEMail } from '../../backendUtils.js';
import { fail } from '@sveltejs/kit';
import jwt from 'jsonwebtoken';
import { JWT_SECRET } from '$env/static/private';

export const actions = {
	lang: async ({ cookies, request }) => {
		const langForm = await request.formData();
		const newLang = langForm.get('lang');

		let langChangeResponse = {
			lang: newLang,
			error: true,
		};

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
					cookies.set('lang', newLang, { maxAge: 60 * 60 * 24 * 7 });
				} catch (error) {
					langChangeResponse.error = true;
					return fail(500, langChangeResponse);
				}
			}
		} catch (error) {
			console.error(error);
			return fail(500, langChangeResponse);
		}
	},
};
