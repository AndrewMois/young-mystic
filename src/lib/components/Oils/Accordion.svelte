<script>
	/**
	 * Component that accepts an array of blocks from Sanity and renders them as HTML. Pass textSections as the prop.
	 */
	import { slide } from 'svelte/transition';

	export let sections = [];
</script>

{#each sections as section (section._key)}
	<section class='w-full mb-3 border-b border-faded'>
		<button
			class='w-full flex items-center gap-3 py-3 text-xl'
			on:click={() => (section.open = !section.open)}
		>
			<svg
				class={`transition-transform duration-500 ease-in-out ${section.open ? 'rotate-180' : ''}`}
				xmlns='http://www.w3.org/2000/svg'
				width='24'
				height='24'
				viewBox='0 0 24 24'
				fill='none'
				stroke='currentColor'
				stroke-width='2'
				stroke-linecap='round'
				stroke-linejoin='round'
			>
				<path d='m6 9 6 6 6-6' />
			</svg>
			<h5 class='text-left'>{section.name}</h5>
		</button>
		{#if section.open}
			<div class='flex flex-col gap-2 mb-2 ml-3' transition:slide>
				{#each section.content as block (block._key)}
					{#if block.style === 'h3'}
						<h3 class='font-bold'>{block.children[0].text}</h3>
					{:else if block.style === 'normal' && block.listItem !== 'bullet'}
						<p class='leading-relaxed'>
							{#each block.children as child (child._key)}
								{#if child.marks && child.marks.includes('strong')}
									<strong>{child.text}</strong>
								{:else}
									{child.text}
								{/if}
							{/each}
						</p>
					{:else if block.style === 'blockquote'}
						<blockquote class='border-l-2 border-accent pl-3 mt-2 italic'>
							{block.children[0].text}
						</blockquote>
					{:else if block.listItem === 'bullet'}
						<p class='leading-relaxed'>
							<span class='font-bold'>&#8226</span>
							{#each block.children as child (child._key)}
								{#if child.marks && child.marks.includes('strong')}
									<strong>{child.text}</strong>
								{:else}
									{child.text}
								{/if}
							{/each}
						</p>
					{/if}
				{/each}
			</div>
		{/if}
	</section>
{/each}