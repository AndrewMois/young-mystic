<script>

	import Wrapper from '$components/Wrapper.svelte';
	import TopBackground from '$components/TopBackground.svelte';
	import SummaryPanel from '$components/SummaryPanel.svelte';

	export let data;
	$: oilData = data.oil;
</script>
<svelte:head>
	<title>{oilData.nameEn} | YM</title>
	<meta name='description' content={`Узнайте всё об эфирном масле ${oilData.nameRu} в одном месте.`} />
</svelte:head>

<TopBackground />
<Wrapper mobilePadding={true} extraClasses='-mt-20'>
	<SummaryPanel extraClasses='mb-4'>
		<div class='flex flex-col items-center justify-center gap-4'>

			<h2>{oilData.nameEn}</h2>
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



