<script>
	import locales from '$lib/locales/oils/locales.json';
	import Wrapper from '$components/Wrapper.svelte';
	import TopBackground from '$components/TopBackground.svelte';
	import SummaryPanel from '$components/SummaryPanel.svelte';

	export let data;
	const lang = data.lang;
	$: oilData = data.oil;
	console.log(data.oil); //TODO remove
</script>
<svelte:head>
	<title>{oilData.nameEn} | YM</title>
	<meta name='description' content={`Узнайте всё об эфирном масле ${oilData.nameRu} в одном месте.`} />
</svelte:head>

<TopBackground />
<Wrapper mobilePadding={true} extraClasses='-mt-20'>
	<div class='flex justify-center w-full'>
		<img src={oilData.image} alt={'bottle of' + data.oil.nameEn + 'essential oil'} class='w-64 h-64' />
	</div>

	<!-- Oil name section -->
	<div class='px-3 py-4 flex justify-between'>
		<!--	Name -->
		<div>
			<h2 class='text-2xl font-semibold'>{oilData.nameEn}</h2>
			<h3>{oilData.nameRu}</h3>
		</div>

		<!--	Volume	-->
		<div class='flex justify-center items-center gap-2'>

			{#each oilData.volume as volume}
				<div class='text-sm background-faded rounded-xl p-2'>
					{`${volume} ${locales.ml[lang]}`}
				</div>
			{/each}
		</div>
	</div>
	<SummaryPanel extraClasses='mb-4'>
		<div class='flex flex-col gap-4'>

			<p>Available volumes:</p>
			<p>Latin name</p>
			<p>Botanical family</p>
			<p>Origin</p>
			<p>Extraction method</p>
			<p>Active ingredients</p>
			<hr>
			<p>{oilData.description}</p>

		</div>
	</SummaryPanel>
	<!--	Render all sections-->
	<p>Historical info</p>
	<p>Theorapeutic usage</p>
	<p>Usage situations</p>
	<p>Mental effect</p>
	<p>Soul effect</p>
</Wrapper>



