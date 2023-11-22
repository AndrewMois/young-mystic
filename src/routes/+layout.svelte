<script>
	export let data;
	$: user = data?.authedUser;
</script>

<nav>
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
</nav>

<slot />

<footer>
	<p>All rights reserved.</p>
</footer>
