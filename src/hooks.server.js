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
				event.locals.authedUser = await findUserByEmail(collection, claims.email);

			} catch (error) {
				event.locals.authedUser = undefined;
				console.error(error);
			}
		}
	} finally {
		// eslint-disable-next-line no-unsafe-finally
		return await resolve(event);
	}

}