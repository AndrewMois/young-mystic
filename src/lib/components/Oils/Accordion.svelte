<script>
	/**
	 * Component that accepts an array of blocks from Sanity and renders them as HTML. Pass textSections as the prop.
	 */
	export let sections = [];
</script>

{#each sections as section (section._key)}
	<div class='w-full mb-3 border-b border-faded'>
		<button class='w-full flex items-center gap-3 py-3 text-xl'
						on:click={() => section.open = !section.open}>
			<svg class={`transition-transform duration-500 ease-in-out ${section.open ? 'rotate-180' : ''}`}
					 xmlns='http://www.w3.org/2000/svg' width='24' height='24'
					 viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round'
					 stroke-linejoin='round'>
				<path d='m6 9 6 6 6-6' />
			</svg>
			{section.name}
		</button>
		{#if section.open}
			<div class='flex flex-col gap-2 mb-2'>
				{#each section.content as block (block._key)}
					{#each block.children as child (child._key)}
						{#if block.style === 'h3'}
							<h3 class='font-bold'>{child.text}</h3>
						{:else if block.style === 'normal'}
							<p>{child.text}</p>
						{:else if block.style === 'blockquote'}
							<blockquote class='border-l-2 border-accent pl-3 italic'>{child.text}</blockquote>
						{/if}
					{/each}
				{/each}
			</div>
		{/if}
	</div>
{/each}

