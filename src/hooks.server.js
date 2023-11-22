import { JWT_SECRET } from '$env/static/private';
import { dbConn } from './dbConn';
import jwt from 'jsonwebtoken';
import { findUserByEmail } from './backendUtils.js';

export async function handle({ event, resolve }) {
	const authToken = event.cookies.get('authToken');
	try {
		if (!authToken) event.locals.authedUser = undefined;

		const claims = jwt.verify(authToken, JWT_SECRET);
		if (!claims) event.locals.authedUser = undefined;

		if (authToken && claims) {
			try {
				const collection = await dbConn();
				const fullUser = await findUserByEmail(collection, claims.email);
				event.locals.authedUser = fullUser;
			} catch (error) {
				event.locals.authedUser = undefined;
				console.error(error);
			}
		}
	} finally {
		const response = await resolve(event);
		// eslint-disable-next-line no-unsafe-finally
		return response;
	}

}