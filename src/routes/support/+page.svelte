<script>
	import Wrapper from '$components/Wrapper.svelte';
	import locales from '$lib/locales/support/locales.json';
	import TelegramIcon from '$lib/icons/Telegram.svg';
	import MailIcon from '$lib/icons/Mail.svg';
	import ProfileItem from '$components/Profile/ProfileItem.svelte';
	import Youtube from '$lib/icons/Youtube.svg';
	import Instagram from '$lib/icons/Instagram.svg';
	import Facebook from '$lib/icons/Facebook.svg';

	export let data;
	let lang = data.lang;
</script>

<Wrapper mobilePadding={true} extraClasses='-mt-20'>
	<div class='text-black mt-7 bg-white border border-accent rounded-xl shadow-sm max-w-md mx-auto'>
		<div class='grid gap-y-4 p-4 sm:p-7'>

			<h1 class='text-2xl'>
				{locales.appSupport[lang]}
			</h1>

			<p class='text-sm xs:text-base'>{locales.supportText[lang]}</p>

			<ProfileItem href={`mailto:youngliving.ua@outlook.com?subject=${encodeURIComponent(locales.mailtoSubject[lang])}`}
									 title={locales.email[lang]} icon={MailIcon} />

			<ProfileItem href='https://t.me/mrskyray' title={locales.telegramContact[lang]} icon={TelegramIcon} />

			<!-- Social networks	-->
			<hr class='border-accent mt-4' />
			<p class='text-sm xs:text-base'>{locales.socialNetworks[lang]}</p>
			<ProfileItem href='https://www.youtube.com/@Young-Mystic'
									 title={locales.youtube[lang]} icon={Youtube} />
			<ProfileItem href='https://www.instagram.com/youngmystic.oils'
									 title={locales.instagram[lang]} icon={Instagram} />
			<ProfileItem href='https://www.facebook.com/youngmystic.oils'
									 title={locales.facebook[lang]} icon={Facebook} />

		</div>
	</div>
</Wrapper>