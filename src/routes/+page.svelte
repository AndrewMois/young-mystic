<script>
	import Wrapper from '$components/Wrapper.svelte';
	import SearchBar from '$components/SearchBar.svelte';
	import Card from '$components/Card.svelte';
	import locales from '$lib/locales/menu/locales.json';
	import ProfileIcon from '$lib/icons/Profile.svg';
	import SupportIcon from '$lib/icons/Support.svg';
	import MenuItem from '$components/MenuItem.svelte';
	import MenuPanel from '$components/MenuPanel.svelte';

	export const load = async ({ parent }) => {
		await parent();
	};

	export let data;
	const lang = data.lang;
	const menuData = data.menu;
</script>

<svelte:head>
	<title>Young Mystic</title>
	<meta name='description' content='Библиотека эфирных масел Young Living' />
</svelte:head>

<Wrapper mobilePadding={true} extraClasses='-mt-20'>
	<MenuPanel extraClasses='mb-8'>
		<div class='flex flex-col items-center justify-center gap-4'>

			<SearchBar {locales} {lang} />
			{#each menuData as item}
				<Card title={item.title} href={item.slug?.current}
							description={item.description ? item.description : undefined}
							active={item.active}
							image={item.image ? item.image : undefined} />
			{/each}

			<MenuItem href={'/profile'} title={locales.profile[lang]} icon={ProfileIcon} />

			<MenuItem href={'/support'} title={locales.support[lang]} icon={SupportIcon} />

		</div>
	</MenuPanel>
</Wrapper>

