<script>
	import Register from '$components/Auth/Register.svelte';
	import Wrapper from '$components/Wrapper.svelte';

	export let form;
</script>

<svelte:head>
	<title>Регистрация | YM</title>
	<meta name='description' content='Библиотека эфирных масел Young Living' />
</svelte:head>

<Wrapper>
	<Register {form} />
</Wrapper>