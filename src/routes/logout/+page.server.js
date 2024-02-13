import { redirect } from '@sveltejs/kit';

export function load({ cookies, locals }) {
	/* @migration task: add path argument */ cookies.set('authToken', '', { maxAge: 0 });
	locals.authedUser = undefined;

	redirect(302, '/login');
}