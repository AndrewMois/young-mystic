import { redirect } from '@sveltejs/kit';
import { client } from '../sanityClient.js';

export async function load({ locals, cookies }) {
	if (!locals.authedUser) {
		throw redirect(302, '/login');
	}

	const lang = cookies.get('lang') || 'ru';
	const data = await client.fetch(`*[_type == "menu" && language == "${lang}" && visible == true]
	{title, slug, description, active, 
	"image": image.asset->url, order} | order(order asc)`
	);

	if (data && data.length > 0) {
		return {
			menu: data
		};
	}
	return {
		status: 500,
		body: new Error('Couldn\'t load menu')
	};
}