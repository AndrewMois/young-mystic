<script>
	export let icon;
	export let title;
</script>

<a href='/profile'
	 class='flex items-center justify-between py-3 px-4 w-full rounded-xl bg-white shadow-md md:flex-row'>
	<!--	<div class='flex items-center background-faded h-full rounded-l-xl'>-->
	<h5 class='text-xl tracking-tight'>
		{title}
	</h5>
	
	<img src={icon} alt={title + ' icon'}
			 class='h-8'>
	<!--	</div>-->

</a>