<script>
	import Register from '$components/Auth/Register.svelte';
	import Wrapper from '$components/Wrapper.svelte';
	import locales from '$lib/locales/register/locales.json';
	import DemoPopUp from '$components/DemoPopUp.svelte';

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

<Wrapper extraClasses={'-mt-20 mb-7'}>
	<Register {form} {locales} {lang} />
</Wrapper>

<DemoPopUp title='Register details'
					 description="
					 <p>This application should only be available to users from my community. A subscription-based model will be implemented in the future.
For now, each user will have a 'pending' status, which will need to be approved by the admins.</p>
<p>I have created a <span class='border-b-2 border-accent'>Telegram bot</span> that will send a newly registered user's details to the admins and they will be able to approve or deny a user's registration directly in the chat. The bot will update the <span class='border-b-2 border-accent'>MongoDB</span> database and send an email to the new user.</p>

<p><strong>Note:</strong> for this demo, the 'pending' status is disabled, so you can login immediately.</p>
"
					 button='Alright!' />
