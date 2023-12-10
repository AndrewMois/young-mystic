<script>
	export let mobilePadding = true;
</script>

<div
	class={`${mobilePadding ? 'max-w-5xl mx-auto px-4  md:px-6 lg:px-8 xl:px-10' : 'max-w-5xl mx-auto md:px-6 lg:px-8 xl:px-10'}`}>
	<slot />
</div>