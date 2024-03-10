<script>
	import Alert from '$components/Alert.svelte';

	export let form;
	export let locales;
	export let lang;
	let isPasswordFocused = false;
</script>

<div class='text-black mt-7 bg-white border border-accent rounded-xl shadow-sm max-w-md mx-auto'>
	<div class='p-4 sm:p-7'>
		<div class='text-center mb-4'>
			<h1 class='block text-2xl font-bold'>{locales.register[lang]}</h1>
			<p class='mt-2 text-sm'>
				{locales.alreadyHaveAcc[lang]}
				<a
					class='border-b border-accent decoration-2  font-medium hover:border-b-2'
					href='/login'>
					{locales.signInHere[lang]}
				</a>
			</p>
		</div>

		{#if form?.errorMessages}
			<Alert type='error' title={locales.errorTitle[lang]} message={form.errorMessages} />
		{/if}

		<!-- Form -->
		<form method='post' action='?/signup'>
			<div class='grid gap-y-4'>
				<!-- Form Group -->
				<div>
					<label for='firstName' class='block text-sm mb-2'>
						{locales.firstName[lang]}
					</label>
					<div class='relative'>
						<input type='text' id='firstName' name='firstName'
									 class='py-3 px-4 block w-full border-accent rounded-lg border focus:border-accent disabled:opacity-50 disabled:pointer-events-none'
									 required
									 value={form?.firstName?? ''}>
					</div>
				</div>
				<!-- End Form Group -->

				<!-- Form Group -->
				<div>
					<label for='lastName' class='block text-sm mb-2'>
						{locales.lastName[lang]}
					</label>
					<div class='relative'>
						<input type='text' id='lastName' name='lastName'
									 class='py-3 px-4 block w-full border-accent rounded-lg border focus:border-accent disabled:opacity-50 disabled:pointer-events-none'
									 required
									 value={form?.lastName?? ''}>
					</div>
				</div>
				<!-- End Form Group -->

				<!-- Form Group -->
				<div>
					<div class='flex justify-between items-center mb-2 '>
						<label for='ylid' class='block text-sm'>
							{locales.youngLivingId[lang]}
						</label>
					</div>
					<div class='relative'>
						<input type='text' id='ylid' name='ylid'
									 class={`py-3 px-4 block w-full border-accent rounded-lg border focus:border-accent disabled:opacity-50 disabled:pointer-events-none ${form?.idTaken ? 'border-red-500' : ''}`}
									 value={form?.ylid?? ''}
									 required>
						<div
							class={form?.idTaken ? 'absolute inset-y-0 end-0 flex items-center pointer-events-none pe-3' : 'hidden'}>
							<svg class='h-5 w-5 text-red-500' width='16' height='16' fill='currentColor' viewBox='0 0 16 16'
									 aria-hidden='true'>
								<path
									d='M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z' />
							</svg>
						</div>
					</div>
				</div>
				<!-- End Form Group -->

				<!-- Form Group -->
				<div>
					<div class='flex justify-between items-center mb-2 '>
						<label for='lang' class='block text-sm'>
							{locales.preferredLanguage[lang]}
						</label>
					</div>
					<div class='relative'>
						<select
							name='lang'
							id='lang'
							class='py-3 px-4 pe-9 block w-full border-accent rounded-lg border focus:border-accent disabled:opacity-50 disabled:pointer-events-none'>
							<option value='ru' selected>Русский</option>
							<option value='ua'>Українська</option>
							<option value='en'>English</option>
						</select>
					</div>
				</div>
				<!-- End Form Group -->

				<!-- Form Group -->
				<div>
					<label for='email' class='block text-sm mb-2'>
						{locales.email[lang]}
					</label>
					<div class='relative'>
						<input type='email' id='email' name='email' value={form?.email?? ''}
									 class={`py-3 px-4 block w-full border-accent rounded-lg border focus:border-accent disabled:opacity-50 disabled:pointer-events-none ${form?.emailUsed ? 'border-red-500' : ''}`}
									 required>
						<div
							class={form?.emailUsed ? 'absolute inset-y-0 end-0 flex items-center pointer-events-none pe-3' : 'hidden'}>
							<svg class='h-5 w-5 text-red-500' width='16' height='16' fill='currentColor' viewBox='0 0 16 16'
									 aria-hidden='true'>
								<path
									d='M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z' />
							</svg>
						</div>
					</div>
				</div>
				<!-- End Form Group -->

				<!-- Form Group -->
				<div>
					<div class='flex justify-between items-center mb-2 '>
						<label for='password' class='block text-sm'>
							{locales.password[lang]}
						</label>
					</div>
					<div class='relative'>
						<input type='password' id='password' name='password'
									 class={`py-3 px-4 block w-full border-accent rounded-lg border focus:border-accent disabled:opacity-50 disabled:pointer-events-none ${form?.weakPassword || form?.passwordDiffer ? 'border-red-500' : ''}`}
									 on:focus={() => isPasswordFocused = true}
									 on:blur={() => isPasswordFocused = false}
									 required>
						<div
							class={form?.weakPassword || form?.passwordDiffer ? 'absolute inset-y-0 end-0 flex items-center pointer-events-none pe-3' : 'hidden'}>
							<svg class='h-5 w-5 text-red-500' width='16' height='16' fill='currentColor' viewBox='0 0 16 16'
									 aria-hidden='true'>
								<path
									d='M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z' />
							</svg>
						</div>
					</div>
				</div>
				{#if isPasswordFocused}
					<Alert type={'info'} marginBottom={false}
								 title={locales.passwordRequirementsTitle[lang]}
								 message={[locales.passwordRequirements1[lang],
							 locales.passwordRequirements2[lang],
							 locales.passwordRequirements3[lang],
							 locales.passwordRequirements4[lang]]}
					/>
				{/if}
				<!-- End Form Group -->

				<!-- Form Group -->
				<div>
					<div class='flex justify-between items-center mb-2 '>
						<label for='passwordRepeat' class='block text-sm'>
							{locales.repeatPassword[lang]}
						</label>
					</div>
					<div class='relative'>
						<input type='password' id='passwordRepeat' name='passwordRepeat'
									 class={`py-3 px-4 block w-full border-accent rounded-lg border focus:border-accent disabled:opacity-50 disabled:pointer-events-none ${form?.passwordDiffer ? 'border-red-500' : ''}`}
									 on:focus={() => isPasswordFocused = true}
									 on:blur={() => isPasswordFocused = false}
									 required>
						<div
							class={form?.passwordDiffer ? 'absolute inset-y-0 end-0 flex items-center pointer-events-none pe-3' : 'hidden'}>
							<svg class='h-5 w-5 text-red-500' width='16' height='16' fill='currentColor' viewBox='0 0 16 16'
									 aria-hidden='true'>
								<path
									d='M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z' />
							</svg>
						</div>
					</div>
				</div>
				<!-- End Form Group -->

				<input type='hidden' name='lang' value={lang}>
				<!-- End Language Hidden -->

				<button type='submit'
								class='w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent background-accent text-black disabled:opacity-50 disabled:pointer-events-none'>
					{locales.register[lang]}
				</button>
			</div>
		</form>
		<!-- End Form -->
		<div class='mt-4 text-center'>
			<p class='text-sm text-gray-600 '>
				{locales.problemWithRegistration[lang]}
			</p>
			<a
				class='border-b border-accent decoration-2  font-medium text-sm hover:border-b-2'
				href='/support'>
				{locales.contactUs[lang]}
			</a>
		</div>
	</div>
</div>
