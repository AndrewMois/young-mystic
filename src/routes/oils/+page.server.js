import { createClient } from '@sanity/client';

const client = createClient({
	projectId: 'lttjxemu',
	dataset: 'production',
	apiVersion: '2023-11-25',
	useCdn: false,
});


export async function load({ url }) {
	let filter = url.searchParams.get('filter') ?? 'oil';

	const data = await client.fetch(`*[_type == "${filter}"]`);

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