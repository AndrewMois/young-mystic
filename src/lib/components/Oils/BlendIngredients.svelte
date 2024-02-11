<script>
	export let title = undefined;
	export let ingredients = [];
</script>

{#if title && ingredients.length > 0}
	<div class='w-full flex flex-col gap-1'>
		<p class='font-semibold px-3 '>{title}:</p>
		{#each ingredients as ingredient}
			<a href={ingredient.slug}
				 class='px-3 py-2 background-primary border border-accent rounded-xl'>
				<p class='font-semibold'>{ingredient.nameEn}</p>
				{#if ingredient.nameRu}
					<p class='text-xs'>{ingredient.nameRu}</p>
				{/if}
			</a>
		{/each}
	</div>
{/if}