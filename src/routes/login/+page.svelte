<script>
	import Login from '$components/Auth/Login.svelte';
	import Wrapper from '$components/Wrapper.svelte';
	import locales from '$lib/locales/login/locales.json';
	import DemoPopUp from '$components/DemoPopUp.svelte';

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

<Wrapper extraClasses='-mt-20'>
	<Login {form} {locales} {lang} />
</Wrapper>

<DemoPopUp title='Welcome to Demo Version!'
					 description="<p>Thank you a lot for your interest in my work.</p>
					 <p>Such pop-ups will guide you through the demo of this application.</p>
						<p>The demo version has all the functionality of the full version, but just has less entities in the
							database. This is because production version rely only on the Russian locale data, with more
							languages to come.</p>
						<p><strong>Authentication service</strong></p>
						<p>User data is stored securely in <span class='border-b-2 border-accent'>MongoDB</span> using custom
register/login logic, while authentication is handled by <span class='border-b-2 border-accent'>JWT</span>
and SvelteKit hooks.</p>
<p>All <span class='border-b-2 border-accent'>data is encrypted and stored securely</span>, so you can feel
	free to register.</p>
<p>To save your time, you can <span
	class='border-b-2 border-accent'>use prefilled credentials.</span></p>"
					 button='Got it!' />
