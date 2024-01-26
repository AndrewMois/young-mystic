<script>
	import Register from '$components/Auth/Register.svelte';
	import Wrapper from '$components/Wrapper.svelte';
	import locales from '$lib/locales/register/locales.json';
	import TopBackground from '$components/TopBackground.svelte';

	export const load = async ({ parent }) => {
		await parent(); // for auth check
	};
	export let form;
	export let data;
	const lang = data.lang;
</script>

<svelte:head>
	<title>Регистрация | YM</title>
	<meta name='description' content='Библиотека эфирных масел Young Living' />
</svelte:head>

<TopBackground />
<Wrapper extraClasses={'-mt-20 mb-7'}>
	<Register {form} {locales} {lang} />
</Wrapper>
