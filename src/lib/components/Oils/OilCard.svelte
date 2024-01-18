<script>
	export let img = 'https://picsum.photos/200/200';
	export let href = '/';
	export let nameEn = 'oil';
	export let nameRu = 'масло';
	export let lang = 'ru';
</script>

<a href={href} class='text-lg bg-white rounded-xl shadow-sm px-4 py-2 w-full'>
	<img src={img} alt={nameEn + 'oil bottle'} />
	{nameEn}
	{#if lang === 'ru'}
		{nameRu}
	{/if}
</a>