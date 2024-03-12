<script>
	import locales from '$lib/locales/profile/locales.json';
	import Wrapper from '$components/Wrapper.svelte';
	import LanguageChange from '$components/Profile/LanguageChange.svelte';
	import LogoutIcon from '$lib/icons/Logout.svg';
	import ProfileItem from '$components/Profile/ProfileItem.svelte';

	export let data;
	export let form;
	let lang = data.lang;
</script>

<Wrapper mobilePadding={true} extraClasses='-mt-20'>
	<div class='text-black mt-7 mb-8 bg-white border border-accent rounded-xl shadow-sm max-w-md mx-auto'>
		<div class='grid gap-y-4 p-4 sm:p-7'>
			<h1 class='text-2xl'>
				{locales.profileSettings[lang]}
			</h1>

			<div>
				<p class='text-sm mb-2'>{locales.name[lang]}</p>
				<p>{data.authedUser.name}</p>
			</div>

			<div>
				<p class='text-sm mb-2'>{locales.email[lang]}</p>
				<p>{data.authedUser.email}</p>
			</div>

			<div>
				<p class='text-sm mb-2'>{locales.ylid[lang]}</p>
				<p>{data.authedUser.ylid}</p>
			</div>

			<hr class='border-accent my-4' />

			<LanguageChange {form} {locales} {lang} />

			<hr class='border-accent my-4' />

			<ProfileItem href={'/logout'} title={locales.logout[lang]} icon={LogoutIcon} />

		</div>
	</div>
</Wrapper>