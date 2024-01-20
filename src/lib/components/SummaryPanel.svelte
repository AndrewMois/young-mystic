<script>
	export let extraClasses = '';
</script>

<section
	class={`w-full rounded-t-3xl bg-amber-50 border border-accent background-accent px-3 pt-4 pb-6 ${extraClasses ? extraClasses : ''}`}>
	<slot />
</section>