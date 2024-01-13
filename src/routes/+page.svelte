<script>
	import Wrapper from '$components/Wrapper.svelte';
	import SummaryPanel from '$components/SummaryPanel.svelte';
	import SearchBar from '$components/SearchBar.svelte';
	import Card from '$components/Card.svelte';
	import TopBackground from '$components/TopBackground.svelte';


	export const load = async ({ parent }) => {
		await parent();
	};

	export let data;
	$: user = data?.authedUser;
	const menuData = data.menu;
</script>

<svelte:head>
	<title>Young Mystic</title>
	<meta name='description' content='Библиотека эфирных масел Young Living' />
</svelte:head>

<TopBackground />
<Wrapper mobilePadding={true} extraClasses='-mt-20'>
	<SummaryPanel>
		<div class='flex flex-col items-center justify-center gap-4'>
			<SearchBar />
			{#each menuData as item}
				<Card title={item.title} href={item.slug?.current}
							description={item.description ? item.description : undefined}
							active={item.active}
							image={item.image ? item.image : undefined} />
			{/each}
		</div>
	</SummaryPanel>
</Wrapper>

<style>
    .background {
        background-size: cover;
        background-image: linear-gradient(
                to bottom, transparent, var(--background-colour)
        ), url('$lib/images/flower-small.webp');
    }

    @media (min-width: 600px) {
        .background {
            background-image: linear-gradient(
                    to bottom, transparent, var(--background-colour)
            ), url('$lib/images/flower-small.webp');
        }
    }

    @media (min-width: 1024px) {
        .background {
            background-image: linear-gradient(
                    to bottom, transparent, var(--background-colour)
            ), url('$lib/images/flower-small.webp');
        }
    }
</style>