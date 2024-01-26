import { createClient } from '@sanity/client';
import { redirect } from '@sveltejs/kit';

const client = createClient({
	projectId: 'lttjxemu',
	dataset: 'production',
	apiVersion: '2023-11-25',
	useCdn: false
});

// Accepts params.slug from route. Locals for language
export async function load({ params, locals }) {

	if (!locals.authedUser) {
		throw redirect(302, '/login');
	}

	let slug = params.slug;
	const lang = locals.lang ? locals.lang : 'ru';


	const data = await client.fetch(`*[slug.current == "${slug}" && language == "${lang}"]{..., "image": image.asset->url}`);
	if (data && data.length > 0) {
		return {
			oil: data[0]
		};
	}
	return {
		status: 404,
		body: new Error('This page does not exist')
	};
}