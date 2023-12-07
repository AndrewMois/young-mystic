<script>
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

<h1>Welcome to The Library {user?.firstName ?? ''}</h1>
<p>Visit <a href='https://kit.svelte.dev'>kit.svelte.dev</a> to read the documentation</p>
