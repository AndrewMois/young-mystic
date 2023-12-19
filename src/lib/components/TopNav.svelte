<nav>
	<div class='font-cormorant max-w-5xl mx-auto px-3 md:px-6 lg:px-8 xl:px-10 flex justify-center py-3 bg-amber-50'>
		<a href='/'>
			<h2 class='text-2xl md:text-3xl lg:text-3xl xl:text-4xl'>
				<slot />
			</h2>
		</a>
	</div>
	<!--		<a href='/'>Home</a>-->
	<!--		<a href='/oils'>Oils</a>-->
	<!--		{#if !user}-->
	<!--			<a href='/login'>Login</a>-->
	<!--			<a href='/register'>Register</a>-->
	<!--		{/if}-->

	<!--		{#if user }-->
	<!--			<a href={`/${user.ylid}`}>Your Page</a>-->
	<!--			<a href='/logout' data-sveltekit-preload-data='off' data-sveltekit-reload>Logout</a>-->
	<!--		{/if}-->

</nav>