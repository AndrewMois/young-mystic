import { redirect } from '@sveltejs/kit';

export async function load({ locals }) {
	if (!locals.authedUser) {
		redirect(302, '/login');
	}
}