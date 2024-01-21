<script>
	export let locales;
	export let lang = 'ru'; //fallback
	let selectedFilter = null;
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