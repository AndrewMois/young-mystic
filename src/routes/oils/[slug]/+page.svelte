<script>

	export let data;
	$: oilData = data.oil;
</script>
<svelte:head>
	<title>{oilData.nameRu} | YM</title>
	<meta name='description' content={`Узнайте всё об эфирном масле ${oilData.nameRu} в одном месте.`} />
</svelte:head>

<h1>Oil page</h1>

<h2>{oilData.nameEn}</h2>

