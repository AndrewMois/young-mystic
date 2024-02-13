import { createClient } from '@sanity/client';
import { redirect } from '@sveltejs/kit';

const client = createClient({
	projectId: 'lttjxemu',
	dataset: 'production',
	apiVersion: '2023-11-25',
	useCdn: false
});


export async function load({ url, locals }) {
	if (!locals.authedUser) {
		redirect(302, '/login');
	}

	const lang = locals.lang ? locals.lang : 'ru';
	let filter = url.searchParams.get('filter') ?? '';
	// possible query params: filter=oil, filter=blend

	let query = `*[${filter === '' ? '(_type == "oil" || _type == "blend")' : `_type == "${filter}"`} && language == "${lang}"] {nameEn, nameRu, description, slug, "image": image.asset->url} | order(nameEn asc)`;
	const data = await client.fetch(query);

	if (data && data.length > 0) {
		return {
			oils: data
		};
	}
	return {
		status: 500,
		body: new Error('Internal Server Error')
	};
}