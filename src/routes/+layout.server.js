export async function load({ locals, cookies }) {
	let authedUser = undefined;
	let lang = cookies.get('lang');
	if (!lang) {
		lang = 'ru'; // default language
		cookies.set('lang', 'ru');
	}
	// locals.lang ? lang = locals.lang : lang = 'ru';

	if (locals.authedUser) authedUser = locals.authedUser;
	return { authedUser, lang };
}