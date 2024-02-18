import { redirect } from '@sveltejs/kit';

export function load({ cookies, locals }) {
	cookies.set('authToken', '', { maxAge: 0 }, { path: '/' });
	locals.authedUser = undefined;

	redirect(302, '/login');
}