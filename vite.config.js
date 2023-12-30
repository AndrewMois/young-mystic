import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { SvelteKitPWA } from '@vite-pwa/sveltekit';

export default defineConfig({
	plugins: [sveltekit(), SvelteKitPWA({
		strategies: 'injectManifest',
		srcDir: 'src',
		filename: 'sw.js', // or `my-sw.ts`
		/* other pwa options */
	})],
	assetsInclude: ['src/sw.js'],
});
