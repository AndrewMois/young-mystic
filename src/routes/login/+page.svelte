<script>
	import Login from '$components/Auth/Login.svelte';
	import Wrapper from '$components/Wrapper.svelte';

	export let form;
</script>
<svelte:head>
	<title>Логин | YM</title>
	<meta name='description' content='Библиотека эфирных масел Young Living' />
</svelte:head>

<Wrapper>
	<Login {form} />
</Wrapper>