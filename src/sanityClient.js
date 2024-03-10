import { createClient } from '@sanity/client';

export const client = createClient({
	projectId: 'lttjxemu',
	dataset: 'production',
	apiVersion: '2024-03-10',
	useCdn: false,
});
