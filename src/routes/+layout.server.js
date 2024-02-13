import { redirect } from '@sveltejs/kit';

export async function load({ locals, cookies, url }) {
	if (!locals.authedUser && (url.pathname !== '/login' && url.pathname !== '/register')) {
		redirect(302, '/login');
	}

	let lang = cookies.get('lang');

	if (!lang) {
		lang = 'ru'; // default language
		cookies.set('lang', 'ru');
	}

	let authedUser = undefined;
	if (locals.authedUser) authedUser = locals.authedUser;
	return { authedUser, lang };
}