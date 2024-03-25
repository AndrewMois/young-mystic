<script>
	import locales from '$lib/locales/oils/locales.json';
	import MenuPanel from '$components/MenuPanel.svelte';
	import SearchBar from '$components/SearchBar.svelte';
	import OilFilter from '$components/Oils/OilFilter.svelte';
	import OilCard from '$components/Oils/OilCard.svelte';
	import DemoPopUp from '$components/DemoPopUp.svelte';

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

<DemoPopUp title='Have fun browsing!'
					 description="
          <p>Alright, this message is short 😬</p>
          <p>The design is focused on <span class='border-b-2 border-accent'>speed</span>, <span class='border-b-2 border-accent'>intuitiveness</span> and <span class='border-b-2 border-accent'>accessibility</span>: type in the search and press 'enter' to open the first result.</p>
      <p>All oil data is stored in <span class='border-b-2 border-accent'>Sanity CMS</span> and is retrieved based on the user's language.</p>
      <p>All data is <span class='border-b-2 border-accent'>cached</span>, allowing the application to respond quickly and be available <span class='border-b-2 border-accent'>offline</span>.</p>
      <p>You can try to install the app from your browser's Share menu</p>
"
					 button='Finally!' />