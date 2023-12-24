import { createClient } from '@sanity/client';

const client = createClient({
	projectId: 'lttjxemu',
	dataset: 'production',
	apiVersion: '2023-11-25',
	useCdn: false,
});

// Accepts params.slug from route. Locals for language
export async function load({ params, locals }) {
	let slug = params.slug;
	const lang = locals.lang ? locals.lang : 'ru';


	const data = await client.fetch(`*[slug.current == "${slug}" && language == "${lang}"]`);
	if (data && data.length > 0) {
		return {
			oil: data[0],
		};
	}
	return {
		status: 404,
		body: new Error('This page does not exist'),
	};
}