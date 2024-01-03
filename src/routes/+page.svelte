<script>
	import Wrapper from '$components/Wrapper.svelte';
	import SummaryPanel from '$components/SummaryPanel.svelte';
	import SearchBar from '$components/SearchBar.svelte';
	import Card from '$components/Card.svelte';

	export const load = async ({ parent }) => {
		await parent();
	};

	export let data;
	$: user = data?.authedUser;

</script>

<svelte:head>
	<title>Young Mystic</title>
	<meta name='description' content='Библиотека эфирных масел Young Living' />
</svelte:head>

<div class='background h-36'>
	<Wrapper mobilePadding={true} extraClasses='h-24 w-full flex items-center content-center'>
		<!--			<p class='text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-shadow-white'>Привет, {user?.firstName ?? ''}</p>-->
	</Wrapper>


	<Wrapper mobilePadding={true} extraClasses=''>
		<SummaryPanel>
			<div class='flex flex-col items-center justify-center gap-4'>
				<SearchBar />

				<Card title='Библиотека масел' href='/oils' />
				<Card title='Бизнес' />
				<Card title='Контакты' />
			</div>
		</SummaryPanel>
		<p>Visit <a href='https://kit.svelte.dev'>kit.svelte.dev</a> to read the documentation</p>
	</Wrapper>
</div>

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