import { redirect } from '@sveltejs/kit';

export function load({ cookies, locals }) {
	cookies.set('authToken', '', { maxAge: 0 });
	locals.authedUser = undefined;

	throw redirect(302, '/login');
}