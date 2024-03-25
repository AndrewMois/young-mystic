<script>
	import Wrapper from '$components/Wrapper.svelte';
	import SearchBar from '$components/SearchBar.svelte';
	import Card from '$components/Card.svelte';
	import locales from '$lib/locales/menu/locales.json';
	import ProfileIcon from '$lib/icons/Profile.svg';
	import SupportIcon from '$lib/icons/Support.svg';
	import MenuItem from '$components/MenuItem.svelte';
	import MenuPanel from '$components/MenuPanel.svelte';
	import DemoPopUp from '$components/DemoPopUp.svelte';

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

<DemoPopUp title='Idea of the app'
					 description="
					 <p>As a community leader and essential oils enthusiast, I wanted to create a <span class='border-b-2 border-accent'>handy essential oils library</span> with a focus on <span class='border-b-2 border-accent'>simplicity and ease of use</span> for members of all ages.</p>
      <p>We were relying on a lot of thick books and encyclopaedias that were difficult to keep handy.</p>
      <p class='font-bold'>Technologies used:</p>
      <ul class='list-disc ml-4'>
				<li><span class='border-b-2 border-accent'>SvelteKit</span> as a front-end framework.</li>
				<li><span class='border-b-2 border-accent'>Sanity</span> as a headless CMS for content management in multiple languages.</li>
				<li><span class='border-b-2 border-accent'>Vercel</span> for deployment.</li>
				<li><span class='border-b-2 border-accent'>MongoDB</span> for the database.</li>
				<li><span class='border-b-2 border-accent'>Figma</span> for designing.</li>
				<li><span class='border-b-2 border-accent'>TailwindCSS</span> for the styling.</li>
				</ul>
      <p class='font-bold'>What has been done:</p>
      <ul class='list-disc ml-4'>
        <li>Designed and created from scratch</li>
        <li>App is available for installation on all platforms as a <span class='border-b-2 border-accent'>PWA</span> and <span class='border-b-2 border-accent'>works offline.</span></li>
        <li>A library of over 200 oils in Russian (Ukrainian and English are being translated).</li>
        <li>App is available in <span class='border-b-2 border-accent'>three languages</span> and more can be easily added in the future.</li>
      </ul>
      <p class='font-bold'>Features under development:</h3>
      <ul class='list-disc ml-4'>
        <li>Community news section.</li>
        <li>Online courses section with the possibility to buy a course.</li>
        <li>Paid subscriptions for non-community members.</li>
      </ul>
			<p><strong>Note:</strong> This is an MVP version that was released in March 2024. More to come!</p>"
					 button='Got it!' />