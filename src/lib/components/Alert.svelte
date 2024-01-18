<script>
	export let type; // success, error, warning, info
	export let title;
	export let message = '';
	export let marginBottom = true;
	let isMessageArray = false;
	$: isMessageArray = Array.isArray(message);
</script>

<!-- Warning type -->
{#if type === 'warning'}
	<div
		class='bg-yellow-50 border border-yellow-200 text-sm text-yellow-800 rounded-lg p-4 mb-4'
		role='alert'>
		<div class='flex'>
			<div class='flex-shrink-0'>
				<svg class='flex-shrink-0 h-4 w-4 mt-0.5' xmlns='http://www.w3.org/2000/svg' width='24' height='24'
						 viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round'
						 stroke-linejoin='round'>
					<path d='m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z' />
					<path d='M12 9v4' />
					<path d='M12 17h.01' />
				</svg>
			</div>
			<div class={message ? 'ms-4' : 'ms-4 flex items-center'}>
				<h3 class='text-sm font-semibold'>
					{#if title}
						{title}
					{:else}
						Warning
					{/if}
				</h3>
				<div class='mt-1 text-sm text-gray-800'>
					{#if isMessageArray}
						<ul class='list-disc space-y-1 ps-5'>
							{#each message as msg}
								<li>{msg}</li>
							{/each}
						</ul>
					{:else if message}
						{message}
					{/if}
				</div>
			</div>
		</div>
	</div>
{/if}

<!-- Error type -->
{#if type === 'error'}
	<div
		class='bg-red-50 border border-red-200 text-sm text-red-800 rounded-lg p-4 mb-4'
		role='alert'>
		<div class='flex'>
			<div class='flex-shrink-0'>
				<svg class='flex-shrink-0 h-4 w-4 mt-0.5' xmlns='http://www.w3.org/2000/svg' width='24' height='24'
						 viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round'
						 stroke-linejoin='round'>
					<circle cx='12' cy='12' r='10' />
					<path d='m15 9-6 6' />
					<path d='m9 9 6 6' />
				</svg>
			</div>
			<div class={message ? 'ms-4' : 'ms-4 flex items-center'}>
				<h3 class='text-sm font-semibold'>
					{#if title}
						{title}
					{:else}
						An error has occurred
					{/if}
				</h3>
				<div class='mt-2 text-sm text-gray-800'>
					{#if isMessageArray}
						<ul class='list-disc space-y-1 ps-5'>
							{#each message as msg}
								<li>{msg}</li>
							{/each}
						</ul>
					{:else if message}
						{message}
					{/if}
				</div>
			</div>
		</div>
	</div>
{/if}

<!-- Success type -->
{#if type === 'success'}
	<div
		class='bg-teal-50 border border-teal-200 text-sm text-teal-800 rounded-lg p-4 mb-4'
		role='alert'>
		<div class='flex'>
			<div class='flex-shrink-0'>
				<svg class='flex-shrink-0 h-4 w-4 text-teal-600 mt-1' xmlns='http://www.w3.org/2000/svg' width='24' height='24'
						 viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round'
						 stroke-linejoin='round'>
					<path d='M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z' />
					<path d='m9 12 2 2 4-4' />
				</svg>
			</div>
			<div class={message ? 'ms-4' : 'ms-4 flex items-center'}>
				<h3 class='text-sm font-semibold'>
					{#if title}
						{title}
					{:else}
						Success
					{/if}
				</h3>
				<div class='mt-1 text-sm text-gray-800'>
					{#if isMessageArray}
						<ul class='list-disc space-y-1 ps-5'>
							{#each message as msg}
								<li>{msg}</li>
							{/each}
						</ul>
					{:else if message}
						{message}
					{/if}
				</div>
			</div>
		</div>
	</div>
{/if}

<!-- Info type -->
{#if type === 'info'}
	<div
		class={`bg-blue-50 border border-blue-200 text-sm text-blue-800 rounded-lg p-4 ${marginBottom? 'mb-4' : ''}`}
		role='alert'>
		<div class='flex'>
			<div class='flex-shrink-0'>
				<svg class='flex-shrink-0 h-4 w-4' xmlns='http://www.w3.org/2000/svg' width='24' height='24'
						 viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round'
						 stroke-linejoin='round'>
					<circle cx='12' cy='12' r='10' />
					<path d='M12 16v-4' />
					<path d='M12 8h.01' />
				</svg>
			</div>
			<div class={message ? 'ms-4' : 'ms-4 flex items-center'}>
				<h3 class='text-sm font-semibold'>
					{#if title}
						{title}
					{:else}
						Info
					{/if}
				</h3>
				<div class='mt-1 text-sm text-gray-800'>
					{#if isMessageArray}
						<ul class='list-disc space-y-1 ps-5'>
							{#each message as msg}
								<li>{msg}</li>
							{/each}
						</ul>
					{:else if message}
						{message}
					{/if}
				</div>
			</div>
		</div>
	</div>
{/if}