/// <reference types="@sveltejs/kit" />
import { build, files, version } from '$service-worker';
// import { createClient } from '@sanity/client';

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

		console.log('⭐️ app installed'); //TODO: remove
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
	console.log('🌟 SW ready'); //TODO: remove
});

self.addEventListener('fetch', (event) => {
	// ignore POST requests etc
	if (event.request.method !== 'GET') return;

	// avoid caching login, logout and register pages
	if (event.request.url.includes('/login') || event.request.url.includes('/logout') || event.request.url.includes('/register')) return;

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

self.addEventListener('message', (event) => {
	if (event.data && event.data.type === 'CLEAR_CACHES') {
		caches.keys().then((names) => {
			for (let name of names) caches.delete(name);
		});
		self.skipWaiting();
		console.log('🌎 Language was changed. Cache was cleared.'); //TODO: remove
	}
});
