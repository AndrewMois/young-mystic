<script>
	import Wrapper from '$components/Wrapper.svelte';
	import '../app.css';
	import TopNav from '$components/TopNav.svelte';
	import { onMount } from 'svelte';
	import TopBackground from '$components/TopBackground.svelte';
	import locales from '$lib/locales/common/locales.json';

	export let data;
	const lang = data.lang;
	export const load = async ({ parent }) => {
		await parent();
	};

	//fetching to save into cache
	onMount(() => {
		fetch('/api/oils')
			.then(response => response.json());
	});
</script>

<TopNav>
	YOUNG MYSTIC
</TopNav>

<TopBackground oils={locales.oils[lang]} blends={locales.blends[lang]} back={locales.back[lang]} />
<Wrapper mobilePadding={false}>
	<main id='main'>
		<slot />
	</main>
</Wrapper>

<!--<footer>-->
<!--	<Wrapper>-->
<!--		<p>All rights reserved.</p>-->
<!--	</Wrapper>-->
<!--</footer>-->


<style lang='postcss'>
    :global(body) {
        background-color: var(--background-colour);
        font-size: 16px; /* Set a base font size for mobile */
        font-family: 'Montserrat', -apple-system, 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', ' Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif, sans-serif;
        line-height: 1.15;

        --background-colour: #f8f2ec;
        --accent-colour: #c89b55;
        --faded-accent-colour: #ddcfb6;

        @media screen and (min-width: 600px) {
            /* Styles for screens larger than 600px (small tablets) */
            font-size: 1.125rem;
        }

        @media screen and (min-width: 768px) {
            /* Styles for screens larger than 768px (larger tablets) */
            font-size: 1.2rem;
        }

        /* Add more media queries as needed for larger screens */
    }
</style>