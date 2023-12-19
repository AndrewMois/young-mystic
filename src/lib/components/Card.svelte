<script>
	export let href = '/';
	export let title = 'Card title';
	export let description = 'Some quick example text to build on the card title and make up the bulk of the card\'s content.';
</script>


<a href={href}
	 class='flex flex-col items-center border border-accent rounded-xl background-accent shadow md:flex-row'>
	<img class='object-cover w-full rounded-t-xl h-48 md:w-64 md:rounded-none md:rounded-s-xl'
			 src='https://images.unsplash.com/photo-1680868543815-b8666dba60f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2532&q=80'
			 alt=''>
	<div class='flex flex-col justify-between p-4 leading-normal'>
		<h5 class='mb-2 text-2xl font-bold tracking-tight text-gray-900'>
			{title}
		</h5>
		<p class='mb-3 font-normal text-gray-700'>
			{description}</p>
	</div>
</a>


