<script>
	export let extraClasses = '';
</script>

<section
	class={`w-full rounded-3xl bg-amber-50 border border-accent background-accent px-3 pt-4 pb-4 ${extraClasses ? extraClasses : ''}`}>
	<slot />
</section>