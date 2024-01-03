<script>
	let search = '';
	let suggestions = [];
	let selectedIndex = -1;
	let hideSuggestions = false;

	async function updateSuggestions() {
		if (typeof window !== 'undefined' && 'caches' in window) {
			try {
				hideSuggestions = false;
				const cacheNames = await caches.keys();
				const cache = await caches.open(cacheNames[0]);
				const response = await cache.match('/api/oils');
				const oilsData = await response.json();
				if (search.length < 3) {
					suggestions = [];
					selectedIndex = -1;
					return;
				}
				suggestions = oilsData.filter(
					oil => oil.nameEn.toLowerCase().includes(search.toLowerCase().trim()) ||
						oil.nameRu.toLowerCase().includes(search.toLowerCase().trim()));
				if (!suggestions.length) {
					suggestions = [{ nameEn: 'Ничего не найдено', slug: { current: 'none' } }];
				}
			} catch (e) {
				suggestions = [{ nameEn: 'Упс, произошла ошибка', slug: { current: 'none' } }];
			}

		}
	}

	function handleKeydown(event) {
		if (suggestions.length === 0) return;

		if (event.key === 'ArrowDown') {
			event.preventDefault();
			if (selectedIndex < suggestions.length - 1) selectedIndex++;
		} else if (event.key === 'ArrowUp') {
			event.preventDefault();
			if (selectedIndex > -1) selectedIndex--;
		} else if (event.key === 'Enter') {
			event.preventDefault();
			if (selectedIndex > -1 && selectedIndex < suggestions.length) {
				window.location.href = `/oils/${suggestions[selectedIndex].slug.current}`;
			}
		}
	}

	function handleBlur() {
		setTimeout(() => {
			hideSuggestions = true;
		}, 200);
	}
</script>

<div class='relative w-full'>
	<label for='search' class='sr-only'>Search</label>
	<div class='flex rounded-lg shadow-md relative'>
		<input type='text' id='search' name='search'
					 class='py-3 px-4 block w-full bg-white border-amber-50 border rounded-xl shadow-sm text-sm focus:border-amber-100 focus:ring-amber-500 disabled:opacity-50 disabled:pointer-events-none placeholder-accent'
					 class:rounded-b-none={suggestions && suggestions.length > 0}
					 placeholder='Поиск'
					 bind:value={search} on:input={updateSuggestions} on:keydown={handleKeydown} on:blur={handleBlur}
					 on:focus={updateSuggestions}
					 autocomplete='off'>
	</div>

	{#if !hideSuggestions && suggestions && suggestions.length > 0}
		<ul class='absolute bg-white border-b border-y border-gray-200 rounded-b-md shadow-lg w-full'>
			{#each suggestions as suggestion, index (suggestion.slug.current)}
				{#if suggestion.slug.current === 'none'}
					<li class='block px-4 py-2'>{suggestion.nameEn}</li>
				{:else}
					<li>
						<a href={`/oils/${suggestion.slug.current}`}
							 class='block px-4 py-2 hover:bg-amber-50 focus:bg-amber-50'
							 class:background-primary={index === selectedIndex}>
							{suggestion.nameEn}
							{#if suggestion.nameRu}
								<span class='text-gray-500 font-bold text-xs ml-0.5'>{suggestion.nameRu}</span>
							{/if}
						</a>
					</li>
				{/if}
			{/each}
		</ul>
	{/if}

</div>