<script>
	export let icon;
	export let title;
</script>

<a href='/profile'
	 class='flex items-center h-16 w-full rounded-xl bg-white shadow-md md:flex-row'>
	<div class='flex items-center background-faded h-full rounded-l-xl'>
		<img src={icon} alt={title + ' icon'}
				 class='mx-4 h-10'>
	</div>
	<h5 class='text-2xl tracking-tight ml-4'>
		{title}
	</h5>
</a>