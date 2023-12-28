<script>
	let search = '';
	let suggestions = [];

	async function updateSuggestions() {
		if (typeof window !== 'undefined' && 'caches' in window) {
			const cacheNames = await caches.keys();
			const cache = await caches.open(cacheNames[0]);
			const response = await cache.match('/api/oils');
			const oilsData = await response.json();

			if (search.length < 3) {
				suggestions = [];
				return;
			}
			suggestions = oilsData.filter(oil => oil.nameEn.toLowerCase().includes(search.toLowerCase().trim()));
			if (!suggestions.length) {
				suggestions = [{ nameEn: 'none', slug: { current: 'none' } }];
			}
		}
	}
</script>

<div class='relative w-full'>
	<label for='hs-trailing-button-add-on-with-icon' class='sr-only'>Search</label>
	<div class='flex rounded-lg shadow-md relative'>
		<input type='text' id='hs-trailing-button-add-on-with-icon' name='hs-trailing-button-add-on-with-icon'
					 class='py-3 px-4 block w-full bg-white border-amber-50 border rounded-xl shadow-sm rounded-s-lg text-sm focus:border-amber-100 focus:ring-amber-500 disabled:opacity-50 disabled:pointer-events-none placeholder-accent'
					 placeholder='Поиск' bind:value={search} on:input={updateSuggestions}>
	</div>
	<ul>
		{#if suggestions}
			{#each suggestions as suggestion (suggestion.slug.current)}
				{#if suggestion.nameEn === 'none'}
					<li>Ничего не найдено</li>
				{:else}
					<li><a href={`/oils/${suggestion.slug.current}`}>{suggestion.nameEn}</a></li>
				{/if}
			{/each}
		{/if}
	</ul>
</div>