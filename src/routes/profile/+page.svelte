<script>
	import locales from '$lib/locales/profile/locales.json';
	import Wrapper from '$components/Wrapper.svelte';
	import TopBackground from '$components/TopBackground.svelte';
	import LanguageChange from '$components/Profile/LanguageChange.svelte';

	export let data;
	export let form;
	let lang = data.lang;
</script>

<TopBackground />
<Wrapper mobilePadding={true} extraClasses='-mt-20'>
	<div class='text-black mt-7 bg-white border border-accent rounded-xl shadow-sm max-w-md mx-auto'>
		<div class='grid gap-y-4 p-4 sm:p-7'>
			<h1 class='text-2xl'>
				{locales.profileSettings[lang]}
			</h1>

			<LanguageChange {form} {locales} {lang} />

		</div>
	</div>
</Wrapper>