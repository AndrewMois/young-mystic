import { redirect } from '@sveltejs/kit';

export async function load({ locals }) {
	if (!locals.authedUser) {
		throw redirect(302, '/login');
	}
}