<script>
	export let image = 'https://picsum.photos/200/200';
	export let href = '/';
	export let nameEn = 'oil';
	export let nameRu = 'масло';
	export let lang = 'ru';
</script>

<a href={href}
	 class='flex items-center mb-4 border border-accent text-lg bg-white rounded-xl shadow-sm px-4 py-2 w-full'>
	<img src={image} alt={nameEn + 'oil bottle'}
			 class='w-12 h-12 object-cover' />
	<div class='ml-2'>
		<p class='font-semibold'>{nameEn}</p>
		{#if lang === 'ru'}
			<p class='text-sm'>{nameRu}</p>
		{/if}
	</div>
</a>