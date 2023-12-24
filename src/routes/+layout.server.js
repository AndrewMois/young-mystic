export async function load({ locals }) {
	let authedUser = undefined;
	let lang = undefined;
	locals.lang ? lang = locals.lang : lang = 'ru';

	if (locals.authedUser) authedUser = locals.authedUser;
	return { authedUser, lang };
}