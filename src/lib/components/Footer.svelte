<script>
	import locales from '$lib/locales/common/locales.json';
	import Facebook from '$lib/icons/Facebook.svg';
	import Instagram from '$lib/icons/Instagram.svg';
	import Telegram from '$lib/icons/Telegram.svg';
	import Youtube from '$lib/icons/Youtube.svg';

	export let lang = 'ru';
</script>

<footer class='w-full background-faded max-w-[85rem] py-10 px-4 sm:px-6 lg:px-8 mx-auto'>
	<!-- Grid -->
	<div class='grid grid-cols-1 md:grid-cols-3 items-center gap-5 text-center'>
		<div>
			<a
				class='flex-none text-xl font-cormorant text-black'
				href='/' aria-label='Brand'>YOUNG MYSTIC</a>
		</div>
		<!-- End Col -->

		<ul class='text-center'>
			<li
				class="inline-block relative pe-8 last:pe-0 last-of-type:before:hidden before:absolute before:top-1/2 before:end-3 before:-translate-y-1/2 before:content-['/'] before:text-black-300">
				<a
					class='inline-flex gap-x-2 text-sm text-black-500 hover:text-black-800'
					href='/oils'>
					{locales.library[lang]}
				</a>
			</li>
			<li
				class="inline-block relative pe-8 last:pe-0 last-of-type:before:hidden before:absolute before:top-1/2 before:end-3 before:-translate-y-1/2 before:content-['/'] before:text-black-300">
				<a
					class='inline-flex gap-x-2 text-sm text-black-500 hover:text-black-800'
					href='/'>
					{locales.menu[lang]}
				</a>
			</li>
			<li
				class="inline-block relative pe-8 last:pe-0 last-of-type:before:hidden before:absolute before:top-1/2 before:end-3 before:-translate-y-1/2 before:content-['/'] before:text-black-300">
				<a
					class='inline-flex gap-x-2 text-sm text-black-500 hover:text-black-800'
					href='#'>
					{locales.contacts[lang]}
				</a>
			</li>
		</ul>
		<!-- End Col -->

		<!-- Social Brands -->
		<div class='md:text-end space-x-2'>
			<a
				class='w-8 h-8 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-black-500 hover:bg-black-50 disabled:opacity-50 disabled:pointer-events-none'
				href='#'>
				<img src={Youtube} alt='facebook logo' class='h-5 w-5'>
			</a>
			<a
				class='w-8 h-8 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-black-500 hover:bg-black-50 disabled:opacity-50 disabled:pointer-events-none'
				href='https://www.instagram.com/youngmystic.oils'>
				<img src={Instagram} alt='facebook logo' class='h-5 w-5'>
			</a>
			<a
				class='w-8 h-8 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-black-500 hover:bg-black-50 disabled:opacity-50 disabled:pointer-events-none'
				href='#'>
				<img src={Telegram} alt='facebook logo' class='h-5 w-5'>
			</a>
			<a
				class='w-8 h-8 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-black-500 hover:bg-black-50 disabled:opacity-50 disabled:pointer-events-none'
				href='#'>
				<img src={Facebook} alt='facebook logo' class='h-5 w-5'>
			</a>
		</div>
		<!-- End Social Brands -->
	</div>
	<!-- End Grid -->
</footer>