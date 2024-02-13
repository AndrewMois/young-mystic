import { createClient } from '@sanity/client';
import { error, redirect } from '@sveltejs/kit';

const client = createClient({
	projectId: 'lttjxemu',
	dataset: 'production',
	apiVersion: '2023-11-25',
	useCdn: false,
});

// Accepts params.slug from route. Locals for language
export async function load({ params, locals }) {

	if (!locals.authedUser) {
		redirect(302, '/login');
	}

	let slug = params.slug;
	const lang = locals.lang ? locals.lang : 'ru';


	const data = await client.fetch(`*[slug.current == "${slug}" && language == "${lang}"]{
  ...,
  "image": image.asset->url,
  "ingredients": ingredients[]->{
    nameEn,
    nameRu,
    "slug": slug.current
  }
	}`);

	if (data && data.length > 0) {
		return {
			oil: data[0],
		};
	} else {
		let timestamp = new Date(Date.now());
		error(404, {
			message: 'Not found',
			code: 'NOT_FOUND',
			timestamp: timestamp.toLocaleDateString('en-US') + ' ' + timestamp.toLocaleTimeString('en-US'),
		});
	}
}