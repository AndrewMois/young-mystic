/// <reference types="@sveltejs/kit" />
import { build, files, version } from '$service-worker';
import { createClient } from '@sanity/client';

// Create a unique cache name for this deployment
const CACHE = `cache-${version}`;

const ASSETS = [
	...build, // the app itself
	...files, // everything in `static`
];

self.addEventListener('install', (event) => {
	// Create a new cache and add all files to it
	async function addFilesToCache() {
		const cache = await caches.open(CACHE);
		await cache.addAll(ASSETS);

		const client = createClient({
			projectId: 'lttjxemu',
			dataset: 'production',
			apiVersion: '2023-11-25',
			useCdn: false,
		});

		// Fetch oils database and add it to the cache
		const oilsData = await client.fetch(`*[_type == "oil" || _type=="blend" && language=="ru"]{slug, nameEn, nameRu} | order(nameEn asc)`);
		await cache.put('/api/oils', new Response(JSON.stringify(oilsData)));
	}

	event.waitUntil(addFilesToCache());
});

self.addEventListener('activate', (event) => {
	// Remove previous cached data from disk
	async function deleteOldCaches() {
		for (const key of await caches.keys()) {
			if (key !== CACHE) await caches.delete(key);
		}
	}

	event.waitUntil(deleteOldCaches());
});

self.addEventListener('fetch', (event) => {
	// ignore POST requests etc
	if (event.request.method !== 'GET') return;

	event.respondWith(
		(async function() {
			const cache = await caches.open(CACHE);
			const cachedResponse = await cache.match(event.request);

			const fetchPromise = fetch(event.request)
				.then((networkResponse) => {
					cache.put(event.request, networkResponse.clone());
					return networkResponse;
				})
				.catch(() => cachedResponse);

			return cachedResponse || fetchPromise;
		})(),
	);
});
