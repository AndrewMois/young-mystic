import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { SvelteKitPWA } from '@vite-pwa/sveltekit';

export default defineConfig({
	plugins: [sveltekit(), SvelteKitPWA({
		srcDir: 'src',
		filename: 'sw.js', // or `my-sw.ts`
		/* other pwa options */
	})],
});
