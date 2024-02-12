<script>
	import { page } from '$app/stores';
	import Wrapper from '$components/Wrapper.svelte';
	import BackArrow from '$lib/icons/BackArrow.svg';

	export let oils = 'Масла';
	export let blends = 'Смеси';

	let isOilPage;
	let isBlendPage;
	$: isOilPage = $page.url.pathname.startsWith('/oils/') && $page.url.pathname.includes('-oil');
	$: isBlendPage = $page.url.pathname.startsWith('/oils/') && $page.url.pathname.includes('-blend');
</script>

<div class='background h-36 overflow-auto'>

	{#if isOilPage || isBlendPage}
		<a href={isOilPage ? '/oils?filter=oil' : isBlendPage ? '/oils?filter=blend' : '/oils'}
			 class='flex items-center mt-4 ml-4 px-1 py-1.5 pr-2  w-fit background-faded rounded-xl'
			 style='background: rgba(255, 255, 255, 0.6)'>
			<img src={BackArrow} alt='back arrow' class='h-4 w-4'>
			{#if isOilPage}
				{oils}
			{:else if isBlendPage}
				{blends}
			{:else}
				Назад
			{/if}
		</a>
	{/if}


	<Wrapper mobilePadding={true} extraClasses='h-24 w-full' />
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
            ), url('$lib/images/flower-medium.webp');
        }
    }

    @media (min-width: 1024px) {
        .background {
            background-image: linear-gradient(
                    to bottom, transparent, var(--background-colour)
            ), url('$lib/images/flower-large.webp');
        }
    }
</style>