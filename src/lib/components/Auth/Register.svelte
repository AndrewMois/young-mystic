<script>
	import Alert from '$components/Alert.svelte';

	export let form;
</script>

<div class='mt-7 bg-white border border-gray-200 rounded-xl shadow-sm max-w-md mx-auto'>
	<div class='p-4 sm:p-7'>
		<div class='text-center mb-4'>
			<h1 class='block text-2xl font-bold text-gray-800 '>Register</h1>
			<p class='mt-2 text-sm text-gray-600 '>
				Already have an account?
				<a
					class='text-blue-600 decoration-2 hover:underline font-medium '
					href='/login'>
					Sign in here
				</a>
			</p>
		</div>

		{#if form?.errorMessages}
			<Alert type='error' title='Oops, there are some errors:' message={form.errorMessages} />
		{/if}

		<!-- Form -->
		<form method='post' action='?/signup'>
			<div class='grid gap-y-4'>
				<!-- Form Group -->
				<div>
					<label for='firstName' class='block text-sm mb-2'>First name</label>
					<div class='relative'>
						<input type='text' id='firstName' name='firstName'
									 class='py-3 px-4 block w-full border-gray-200 rounded-lg text-sm border-2 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none '
									 required
									 value={form?.firstName?? ''}>
					</div>
				</div>
				<!-- End Form Group -->

				<!-- Form Group -->
				<div>
					<label for='lastName' class='block text-sm mb-2'>Last name</label>
					<div class='relative'>
						<input type='text' id='lastName' name='lastName'
									 class='py-3 px-4 block w-full border-gray-200 rounded-lg text-sm border-2 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none '
									 required
									 value={form?.lastName?? ''}>
					</div>
				</div>
				<!-- End Form Group -->

				<!-- Form Group -->
				<div>
					<label for='email' class='block text-sm mb-2'>Email address</label>
					<div class='relative'>
						<input type='email' id='email' name='email' value={form?.email?? ''}
									 class={`py-3 px-4 block w-full border-gray-200 rounded-lg border-2 text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none ${form?.emailUsed ? 'border-red-500' : ''}`}
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
						<label for='password' class='block text-sm'>Password</label>
					</div>
					<div class='relative'>
						<input type='password' id='password' name='password'
									 class={`py-3 px-4 block w-full border-gray-200 rounded-lg border-2 text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none ${form?.weakPassword || form?.passwordDiffer ? 'border-red-500' : ''}`}
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
				<!-- End Form Group -->

				<!-- Form Group -->
				<div>
					<div class='flex justify-between items-center mb-2 '>
						<label for='passwordRepeat' class='block text-sm'>Repeat password</label>
					</div>
					<div class='relative'>
						<input type='password' id='passwordRepeat' name='passwordRepeat'
									 class={`py-3 px-4 block w-full border-gray-200 rounded-lg border-2 text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none ${form?.passwordDiffer ? 'border-red-500' : ''}`}
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

				<!-- Form Group -->
				<div>
					<div class='flex justify-between items-center mb-2 '>
						<label for='passwordRepeat' class='block text-sm'>Young Living ID</label>
					</div>
					<div class='relative'>
						<input type='text' id='ylid' name='ylid'
									 class={`py-3 px-4 block w-full border-gray-200 rounded-lg border-2 text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none ${form?.idTaken ? 'border-red-500' : ''}`}
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

				<!-- End Checkbox -->

				<button type='submit'
								class='w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none '>
					Register
				</button>
			</div>
		</form>
		<!-- End Form -->
		<div class='mt-4 text-center'>
			<p class='text-sm text-gray-600 '>
				Problem registering?
				<a
					class='text-blue-600 decoration-2 hover:underline font-medium '
					href='/contact'>
					Contact us
				</a>
			</p>
		</div>
	</div>
</div>

