<script>
	import Wrapper from '$components/Wrapper.svelte';

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

<Wrapper mobilePadding={true}>
	<div class='w-full h-36 flex items-center justify-start'>
		<h1>Привет, {user?.firstName ?? ''}</h1>
	</div>
</Wrapper>

<div class='w-full h-screen rounded-t-3xl bg-amber-100'>
</div>
<p>Visit <a href='https://kit.svelte.dev'>kit.svelte.dev</a> to read the documentation</p>
