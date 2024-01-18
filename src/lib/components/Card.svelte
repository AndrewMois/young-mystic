<script>
	export let href = '/';
	export let title = 'Card title';
	export let description = '';
	export let active = false;
	export let image = 'https://images.unsplash.com/photo-1680868543815-b8666dba60f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2532&q=80';
</script>


<a href={active ? href : undefined}
	 class={`flex flex-col w-full rounded-xl background-primary shadow-md md:flex-row ${!active ? 'pointer-events-none opacity-60' : ''}`}>
	<img class='object-cover w-full rounded-t-xl h-48 md:w-64 md:rounded-none md:rounded-s-xl'
			 src={image}
			 alt='essential oils mystical library'>
	<div class='flex flex-col justify-between p-4 leading-normal'>
		<h5 class='text-2xl tracking-tight'>
			{title}
		</h5>
		{#if description}
			<p class='my-2 font-normal text-gray-700'>
				{description}
			</p>
		{/if}
	</div>
</a>


