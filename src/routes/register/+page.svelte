<script>
	import Register from '$components/Auth/Register.svelte';

	export let form;
</script>

<svelte:head>
	<title>Регистрация | YM</title>
	<meta name='description' content='Библиотека эфирных масел Young Living' />
</svelte:head>

<Register {form} />
