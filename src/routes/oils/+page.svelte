<script>
	import locales from '$lib/locales/oils/locales.json';
	import TopBackground from '$components/TopBackground.svelte';
	import MenuPanel from '$components/MenuPanel.svelte';
	import Wrapper from '$components/Wrapper.svelte';
	import SearchBar from '$components/SearchBar.svelte';
	import OilFilter from '$components/Oils/OilFilter.svelte';

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
	<MenuPanel>
		<div class='flex flex-col items-center justify-center gap-4'>

			<SearchBar {locales} {lang} />
			<OilFilter {locales} {lang} />

		</div>
	</MenuPanel>
</Wrapper>

<a href='/oils?filter=oil'>Single oils</a>
<a href='/oils?filter=blend'>Blends</a>
<p>Here are our oils</p>
{#if oils && oils.length}
	<ul>
		{#each oils as oil}
			<li><a href={`/oils/${oil.slug.current}`}> {oil.nameEn} </a> - {oil.description ?? ''}</li>

		{/each}
	</ul>
{:else}
	<p>No oils found.</p>
{/if}