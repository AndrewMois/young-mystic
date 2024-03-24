<script>
	import { onMount } from 'svelte';
	import { writable } from 'svelte/store';
	import { page } from '$app/stores';
	import { fade } from 'svelte/transition';

	export let title = 'Welcome to my demo app!';
	export let description = 'This app was created using SvelteKit, a modern framework for building web applications.';
	export let button = 'Close';

	// Create a writable store
	const showPopup = writable(false);
	const path = $page.url.pathname;

	onMount(async () => {

		if (!localStorage.getItem(`popupShown${path}`)) {
			showPopup.set(true);
			localStorage.setItem(`popupShown${path}`, 'false');
		} else if (localStorage.getItem(`popupShown${path}`) === 'false') {
			showPopup.set(true);
		}
	});

	const closePopup = () => {
		showPopup.set(false);
		localStorage.setItem(`popupShown${path}`, 'true');
	};
</script>

{#if $showPopup}
	<div class='fixed z-10 inset-0 overflow-y-auto' transition:fade={{duration: 500}}>
		<div class='flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center'>
			<div class='fixed inset-0 transition-opacity' aria-hidden='true'>
				<div class='absolute inset-0 background-faded opacity-75'></div>
			</div>

			<div
				class='inline-block align-bottom border border-accent rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full'>
				<div class='bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4'>
					<h2 class='text-lg leading-6 font-medium text-gray-900'>{title}</h2>
					<p class='mt-2 text-sm text-gray-500'>{description}</p>
				</div>
				<div class='bg-white px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse'>
					<button type='button'
									class='w-full inline-flex justify-center rounded-md shadow-sm px-4 py-2 background-accent text-base font-medium text-white hover:background-faded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 sm:ml-3 sm:w-auto sm:text-sm'
									on:click={closePopup}>
						{button}
					</button>
				</div>
			</div>
		</div>
	</div>
{/if}