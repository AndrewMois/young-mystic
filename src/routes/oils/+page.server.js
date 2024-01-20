import { createClient } from '@sanity/client';

const client = createClient({
	projectId: 'lttjxemu',
	dataset: 'production',
	apiVersion: '2023-11-25',
	useCdn: false,
});


export async function load({ url, locals }) {
	const lang = locals.lang ? locals.lang : 'ru';
	let filter = url.searchParams.get('filter') ?? 'oil';
	// possible query params: filter=oil, filter=blend

	const data = await client.fetch(`*[_type == "${filter}" && language == "${lang}"] {nameEn, nameRu, description, slug, "image": image.asset->url} | order(nameEn asc)`);

	if (data && data.length > 0) {
		return {
			oils: data,
		};
	}
	return {
		status: 500,
		body: new Error('Internal Server Error'),
	};
}