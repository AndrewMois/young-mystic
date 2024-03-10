<script>
	export let icon;
	export let title;
	export let href;
</script>

<a href={href}
	 class='flex items-center justify-between py-2 px-4 w-full rounded-xl border border-accent bg-white md:flex-row'>
	<!--	<div class='flex items-center background-faded h-full rounded-l-xl'>-->
	<p class='tracking-tight xs:text-lg'>
		{title}
	</p>

	<img src={icon} alt={title + ' icon'}
			 class='h-8'>
	<!--	</div>-->

</a>