<script>
	export let mobilePadding = true;
	export let extraClasses = '';
</script>

<div
	class={`${mobilePadding ? `max-w-5xl mx-auto px-3 md:px-6 lg:px-8 xl:px-10 ${extraClasses}` : `max-w-5xl mx-auto md:px-6 lg:px-8 xl:px-10 ${extraClasses}`}`}>
	<slot />
</div>