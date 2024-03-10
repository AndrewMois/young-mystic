<script>
	import { page } from '$app/stores';
	import lottie from 'lottie-web';
	import { onMount } from 'svelte';
	import locales from '$lib/locales/error/locales.json';
	import Footer from '$components/Footer.svelte';
	import ErrorIcon from '$lib/icons/404.json';

	export let data;
	const lang = data.lang;

	onMount(() => {
		try {
			lottie.loadAnimation({
				container: document.getElementById('gif'), // the dom element that will contain the animation
				renderer: 'svg',
				loop: true,
				autoplay: true,
				animationData: ErrorIcon, // the path to the animation json
			});
		} catch (e) {
			console.log(e);
		}
	});
</script>

<div class='flex flex-col items-center justify-center text-center'>
	<div id='gif'></div>
	<h1 class='text-4xl font-bold text-accent font-cormorant'>{locales.oops[lang]}</h1>
	<p class='mt-4 text-lg'>{locales.generalNotFoundText[lang]}</p>
	<p class='mt-2 text-sm'>{locales.contactUs[lang]}</p>
	<a href='/oils'
		 class='mt-6 px-4 py-2 font-semibold background-accent rounded'>{locales.backToLibrary[lang]}</a>
	<p class='text-sm mt-4'>{$page.status}: {$page.error.message}</p>
	{#if $page.error.code}
		<p class='text-xs mt-1 mb-4'>{locales.refCode[lang]}: {$page.error.code}</p>
	{/if}
</div>
<Footer />

