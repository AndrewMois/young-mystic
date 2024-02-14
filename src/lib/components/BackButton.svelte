<script>
	import { page } from '$app/stores';
	import BackArrow from '$lib/icons/BackArrow.svg';

	/*
	This component is called from TopBackground.svelte component.
	 */
	export let oils = 'Масла';
	export let blends = 'Смеси';
	export let back = 'Назад';

	let isOilPage;
	let isBlendPage;
	$: isOilPage = $page.url.pathname.startsWith('/oils/') && $page.url.pathname.includes('-oil');
	$: isBlendPage = $page.url.pathname.startsWith('/oils/') && $page.url.pathname.includes('-blend');
</script>

<!-- This component is called from index.layout.svelte file -->

{#if isOilPage || isBlendPage}
	<a href={isOilPage ? '/oils?filter=oil' : isBlendPage ? '/oils?filter=blend' : '/oils'}
		 class='flex items-center mt-4 px-1 py-1.5 pr-2  w-fit background-faded rounded-xl'
		 style='background: rgba(255, 255, 255, 0.6)'>
		<img src={BackArrow} alt='back arrow' class='h-4 w-4'>
		{#if isOilPage}
			{oils}
		{:else if isBlendPage}
			{blends}
		{:else}
			{back}
		{/if}
	</a>
{/if}