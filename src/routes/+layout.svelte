<script>
	import Wrapper from '$components/Wrapper.svelte';
	import '../app.css';

	export let data;

	$: user = data?.authedUser;
</script>

<nav>
	<Wrapper>
		<a href='/'>Home</a>
		<a href='/oils'>Oils</a>
		{#if !user}
			<a href='/login'>Login</a>
			<a href='/register'>Register</a>
		{/if}

		{#if user }
			<a href={`/${user.ylid}`}>Your Page</a>
			<a href='/logout' data-sveltekit-preload-data='off' data-sveltekit-reload>Logout</a>
		{/if}
	</Wrapper>
</nav>


<Wrapper>
	<main>
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
        /*background-color: theme(colors.gray.100);*/
        font-size: 16px; /* Set a base font size for mobile */

        @media screen and (min-width: 600px) {
            /* Styles for screens larger than 600px (small tablets) */
            font-size: 18px;
        }

        @media screen and (min-width: 768px) {
            /* Styles for screens larger than 768px (larger tablets) */
            font-size: 20px;
        }

        /* Add more media queries as needed for larger screens */
    }
</style>