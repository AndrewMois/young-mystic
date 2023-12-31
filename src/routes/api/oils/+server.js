import { createClient } from '@sanity/client';

const client = createClient({
	projectId: 'lttjxemu',
	dataset: 'production',
	apiVersion: '2023-11-25',
	useCdn: false,
});

export async function GET() {
	const oilsData = await client.fetch(`*[(_type == "oil" || _type=="blend") && language=="ru"]{slug, nameEn, nameRu} | order(nameEn asc)`);
	return new Response(JSON.stringify(oilsData));
}