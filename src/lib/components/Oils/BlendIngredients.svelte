<script>
	export let title = undefined;
	export let ingredients = [];
</script>

{#if title && ingredients.length > 0}
	<div class='w-full flex flex-col gap-1'>
		<p class='font-semibold px-3 '>{title}:</p>
		<div class='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 '>
			{#each ingredients as ingredient}
				<a href={ingredient.slug}
					 class='py-2 px-3 background-primary border border-accent rounded-xl flex items-center'>

					{#if ingredient.nameRu}
						<p class=''>{ingredient.nameRu}</p>
					{:else if ingredient.nameEn}
						<p class=''>{ingredient.nameEn}</p>
					{/if}
				</a>
			{/each}
		</div>
	</div>
{/if}