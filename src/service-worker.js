/// <reference types="@sveltejs/kit" />
import { build, files, version } from '$service-worker';

// Create a unique cache name for this deployment
const CACHE = `cache-${version}`;

const ASSETS = [
	...build, // the app itself
	...files // everything in `static`
];

self.addEventListener('install', (event) => {
	// Create a new cache and add all files to it
	async function addFilesToCache() {
		const cache = await caches.open(CACHE);
		await cache.addAll(ASSETS);
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
		(async function () {
			const cache = await caches.open(CACHE);
			const cachedResponse = await cache.match(event.request);

			const fetchPromise = fetch(event.request)
				.then((networkResponse) => {
					cache.put(event.request, networkResponse.clone());
					return networkResponse;
				})
				.catch(() => cachedResponse);

			return cachedResponse || fetchPromise;
		})()
	);
});
