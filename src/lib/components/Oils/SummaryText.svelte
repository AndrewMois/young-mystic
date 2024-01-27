<script>
	export let header = undefined;
	export let text = undefined;
</script>

{#if header && text}
	<div class='flex flex-col xs:flex-row gap-1'>
		<p class='font-semibold basis-2/5'>{header}:</p>
		<p class='basis-3/5'>{text}</p>
	</div>
{/if}