<script>
	import Alert from '$components/Alert.svelte';

	export let form;
</script>

<div class='mt-7 bg-white border border-gray-200 rounded-xl shadow-sm max-w-md mx-auto'>
	<div class='p-4 sm:p-7'>
		<div class='text-center mb-4'>
			<h1 class='block text-2xl font-bold text-gray-800 '>Sign in</h1>
			<p class='mt-2 text-sm text-gray-600 '>
				Don't have an account yet?
				<a
					class='text-blue-600 decoration-2 hover:underline font-medium '
					href='/register'>
					Sign up here
				</a>
			</p>
		</div>

		{#if form?.errorMessage}
			<Alert type='error' title={form.errorMessage} />
		{/if}

		{#if form?.pending}
			<Alert type='info' title='Your registration is pending' message='Please, wait till we approve you' />
		{/if}

		{#if form?.blocked}
			<Alert type='error' title='Your account is blocked' message='Please, contact us to resolve this issue' />
		{/if}


		<!-- Form -->
		<form method='post' action='?/login'>
			<div class='grid gap-y-4'>
				<!-- Form Group -->
				<div>
					<label for='email' class='block text-sm mb-2'>Email address</label>
					<div class='relative'>
						<input type='email' id='email' name='email'
									 class='py-3 px-4 block w-full border-gray-200 rounded-lg text-sm border-2 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none '
									 required aria-describedby='email-error'
									 value={form?.email?? ''}>
					</div>
				</div>
				<!-- End Form Group -->

				<!-- Form Group -->
				<div>
					<div class='flex justify-between items-center'>
						<label for='password' class='block text-sm mb-2 '>Password</label>
						<a
							class='text-sm text-blue-600 decoration-2 hover:underline font-medium '
							href='../examples/html/recover-account.html'>Forgot password?</a>
					</div>
					<div class='relative'>
						<input type='password' id='password' name='password'
									 class='py-3 px-4 block w-full border-gray-200 rounded-lg border-2 text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none '
									 required aria-describedby='password-error'>
					</div>
				</div>
				<!-- End Form Group -->

				<!-- End Checkbox -->

				<button type='submit'
								class='w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none '>
					Sign in
				</button>
			</div>
		</form>
		<!-- End Form -->
	</div>
</div>


