<script>
	import { onMount } from 'svelte';

	let showButton = false;

	onMount(() => {
		window.addEventListener('scroll', () => {
			showButton = window.scrollY > 200;
		});
	});

	function scrollToTop() {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}
</script>

{#if showButton}
	<button on:click={scrollToTop} class='scroll-to-top rounded-2xl'>
		<svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='black' class='icon'>
			<path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M5 10l7-7m0 0l7 7m-7-7v18'></path>
		</svg>
	</button>
{/if}

<style>
    .scroll-to-top {
        position: fixed;
        bottom: 20px;
        right: 20px;
        background-color: var(--accent-colour);
        color: #fff;
        border: none;
        width: 50px;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        transition: opacity 0.3s ease;
    }

    .icon {
        width: 20px;
        height: 20px;
    }
</style>