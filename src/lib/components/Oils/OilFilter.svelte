<script>
	import { page } from '$app/stores';

	export let locales;
	export let lang = 'ru'; //fallback

	/**
	 * Get the current filter from the URL to highlight the corresponding button
	 * if the user navigates back to the page from the product page
	 */
	let params = new URLSearchParams($page.url.search);
	let selectedFilter = params.get('filter') || null;
</script>

<div class='w-full flex gap-4'>
	<a href={selectedFilter === null ? '/oils' : '/oils?filter=oil'}
		 class={`box-border border-2 border-transparent text-center text-lg bg-white rounded-xl shadow-sm px-4 py-2 w-full ${selectedFilter === 'oil' ? 'border-2 border-faded font-bold' : ''}`}
		 on:click={() => {selectedFilter = selectedFilter === 'oil' ? null : 'oil'}}>
		{locales.singleOils[lang]}
	</a>

	<a href={selectedFilter === null ? '/oils' : '/oils?filter=blend'}
		 class={`box-border border-2 border-transparent text-center text-lg bg-white rounded-xl shadow-sm px-4 py-2 w-full ${selectedFilter === 'blend' ? 'border-2 border-faded font-bold' : ''}`}
		 on:click={() => {selectedFilter = selectedFilter === 'blend' ? null : 'blend'}}>
		{locales.blends[lang]}
	</a>
</div>