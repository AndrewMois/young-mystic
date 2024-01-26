<script>
	import Login from '$components/Auth/Login.svelte';
	import Wrapper from '$components/Wrapper.svelte';
	import locales from '$lib/locales/login/locales.json';
	import TopBackground from '$components/TopBackground.svelte';

	export const load = async ({ parent }) => {
		await parent(); // for auth check
	};
	export let form;
	export let data;
	const lang = data.lang;
</script>
<svelte:head>
	<title>Логин | YM</title>
	<meta name='description' content='Библиотека эфирных масел Young Living' />
</svelte:head>

<TopBackground />
<Wrapper extraClasses='-mt-20'>
	<Login {form} {locales} {lang} />
</Wrapper>

