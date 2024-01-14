<script>
	import Alert from '$components/Alert.svelte';

	export let locales;
	export let lang;
	export let form;
</script>

<!-- Language form -->
<form method='post' action='?/lang'>

	{#if form?.error}
		<Alert type='error' title={locales.languageChangeError[lang]} />
	{/if}
	<div class='grid gap-y-4'>

		<div class='flex justify-between items-center mb-2 '>
			<label for='lang' class='block text-sm'>
				{locales.changeLanguage[lang]}
			</label>
		</div>
		<div class='relative'>
			<select
				name='lang'
				id='lang'
				class='py-3 px-4 pe-9 block w-full border-accent rounded-lg border focus:border-accent disabled:opacity-50 disabled:pointer-events-none'>
				{#if lang === 'ru'}
					<option value='ru' selected>Русский</option>
				{:else}
					<option value='ru'>Русский</option>
				{/if}
				{#if lang === 'ua'}
					<option value='ua' selected>Українська</option>
				{:else}
					<option value='ua'>Українська</option>
				{/if}
				{#if lang === 'en'}
					<option value='en' selected>English</option>
				{:else}
					<option value='en'>English</option>
				{/if}
			</select>
		</div>


		<button type='submit'
						class='w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent background-primary border-accent text-black hover:background-accent disabled:opacity-50 disabled:pointer-events-none'>
			{locales.confirm[lang]}
		</button>
	</div>
</form>
<!-- Language form end -->