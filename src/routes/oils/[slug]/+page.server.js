import { createClient } from '@sanity/client';

const client = createClient({
	projectId: 'lttjxemu',
	dataset: 'production',
	apiVersion: '2023-11-25',
	useCdn: false,
});

export async function load({ params }) {
	let slug = params.slug;
	const data = await client.fetch(`*[slug.current == "${slug}"]`);
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