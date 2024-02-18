import { JWT_SECRET } from '$env/static/private';
import { dbConn } from './dbConn';
import jwt from 'jsonwebtoken';
import { findUserByEmail } from './backendUtils.js';

export async function handle({ event, resolve }) {
	// Language
	const lang = event.cookies.get('lang');
	if (!lang) {
		event.locals.lang = 'ru'; // default language
		event.cookies.set('lang', 'ru', { path: '/' });
	} else event.locals.lang = lang;

	// Auth
	const authToken = event.cookies.get('authToken');
	let result;
	try {
		if (!authToken) event.locals.authedUser = undefined;

		const claims = jwt.verify(authToken, JWT_SECRET);
		if (!claims) event.locals.authedUser = undefined;

		if (authToken && claims) {
			try {
				const collection = await dbConn();
				event.locals.authedUser = await findUserByEmail(collection, claims.email);

			} catch (error) {
				event.locals.authedUser = undefined;
				console.error(error);
			}
		}
		result = await resolve(event);
	} catch (error) {
		console.error(error);
	}
	return result;
}