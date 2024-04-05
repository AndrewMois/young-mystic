import { createClient } from '@sanity/client';
import { SANITY_PROJECT_ID } from '$env/static/private';

export const client = createClient({
	projectId: SANITY_PROJECT_ID,
	dataset: 'production',
	apiVersion: '2024-03-10',
	useCdn: false,
});
