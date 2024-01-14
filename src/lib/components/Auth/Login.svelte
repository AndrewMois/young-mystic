<script>
	import Alert from '$components/Alert.svelte';


	export let form;
	export let locales;
	export let lang;
</script>

<div class='text-black mt-7 bg-white border border-accent rounded-xl shadow-sm max-w-md mx-auto'>
	<div class='p-4 sm:p-7'>
		<div class='text-center mb-4'>
			<h1 class='block text-2xl font-bold'>{locales.login[lang]}</h1>
			<p class='mt-2 text-sm'>
				{locales.noAccount[lang]}
				<a
					class='border-b border-accent decoration-2 hover:underline font-medium hover:border-b-2'
					href='/register'>
					{locales.signUp[lang]}
				</a>
			</p>
		</div>

		{#if form?.errorMessage}
			<Alert type='error' title={form.errorMessage} />
		{/if}

		{#if form?.pending}
			<Alert type='info' title={locales.pendingTitle[lang]} message={locales.pendingMessage[lang]} />
		{/if}

		{#if form?.blocked}
			<Alert type='error' title={locales.blockedTitle[lang]} message={locales.blockedMessage[lang]} />
		{/if}


		<!-- Form -->
		<form method='post' action='?/login'>
			<div class='grid gap-y-4'>
				<!-- Form Group -->
				<div>
					<label for='email' class='block text-sm mb-2'>
						{locales.email[lang]}
					</label>
					<div class='relative'>
						<input type='email' id='email' name='email'
									 class='py-3 px-4 block w-full border-accent rounded-lg border focus:border-accent disabled:opacity-50 disabled:pointer-events-none'
									 required aria-describedby='email-error'
									 value={form?.email?? ''}>
					</div>
				</div>
				<!-- End Form Group -->

				<!-- Form Group -->
				<div>
					<div class='flex justify-between items-center mb-2 '>
						<label for='password' class='block text-sm'>{locales.password[lang]}</label>
						<a
							class='text-sm border-b border-accent decoration-2 hover:underline font-medium hover:border-b-2'
							href='../examples/html/recover-account.html'>{locales.forgotPassword[lang]}</a>
					</div>
					<div class='relative'>
						<input type='password' id='password' name='password'
									 class='py-3 px-4 block w-full border-accent rounded-lg border focus:border-accent disabled:opacity-50 disabled:pointer-events-none'
									 required aria-describedby='password-error'>
					</div>
				</div>
				<!-- End Form Group -->
				<input type='hidden' name='lang' value={lang}>
				<!-- End Language Hidden -->

				<button type='submit'
								class='w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent background-accent text-black disabled:opacity-50 disabled:pointer-events-none'>
					{locales.signInButton[lang]}
				</button>
			</div>
		</form>
		<!-- End Form -->
	</div>
</div>


