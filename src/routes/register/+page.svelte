<script>
	import Register from '$components/Auth/Register.svelte';
	import Wrapper from '$components/Wrapper.svelte';
	import locales from '$lib/locales/register/locales.json';

	export let form;
	export let data;
	const lang = data.lang;
</script>

<svelte:head>
	<title>Регистрация | YM</title>
	<meta name='description' content='Библиотека эфирных масел Young Living' />
</svelte:head>

<Wrapper>
	<Register {form} {locales} {lang} />
</Wrapper>