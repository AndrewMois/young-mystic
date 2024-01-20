<script>
	import locales from '$lib/locales/oils/locales.json';
	import TopBackground from '$components/TopBackground.svelte';
	import MenuPanel from '$components/MenuPanel.svelte';
	import Wrapper from '$components/Wrapper.svelte';
	import SearchBar from '$components/SearchBar.svelte';
	import OilFilter from '$components/Oils/OilFilter.svelte';
	import OilCard from '$components/Oils/OilCard.svelte';

	export const load = async ({ parent }) => {
		await parent(); // for auth check
	};

	export let data;
	const lang = data.lang;
	$: oils = data.oils;
</script>
<svelte:head>
	<title>Масла | YM</title>
	<meta name='description' content='Библиотека эфирных масел Young Living' />
</svelte:head>
<TopBackground />
<Wrapper mobilePadding={true} extraClasses='-mt-20'>
	<MenuPanel extraClasses='mb-4'>
		<div class='flex flex-col items-center justify-center gap-4'>

			<SearchBar {locales} {lang} />
			<OilFilter {locales} {lang} />

		</div>
	</MenuPanel>

	{#if oils && oils.length}
		{#each oils as oil}
			<OilCard href={`/oils/${oil.slug.current}`} nameEn={oil.nameEn} nameRu={oil.nameRu} {lang}
							 image={oil.image} />
		{/each}
	{:else}
		<p>No oils found.</p>
	{/if}

</Wrapper>