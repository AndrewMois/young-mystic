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

	{#if oilData && oilData !== null && oilData !== undefined}
		{#if oilData.image}
			<div class='flex justify-center w-full'>
				<img src={oilData.image} alt={'bottle of ' + data.oil.nameEn + ' essential oil'}
						 class='w-64 h-64 object-cover' />
			</div>
		{/if}

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
			<div class='flex flex-col gap-4 text-sm'>

				<!-- Latin name -->
				{#if oilData.summaryPanel?.latinName}
					<div class='flex flex-col justify-between xs:flex-row'>
						<p class='font-semibold'>{locales.latinName[lang]}:</p>
						<p>{oilData.summaryPanel.latinName}</p>
					</div>
				{/if}

				<!-- Botanical family -->
				{#if oilData.summaryPanel?.botanicalFamily}
					<div class='flex flex-col justify-between xs:flex-row'>
						<p class='font-semibold'>{locales.family[lang]}:</p>
						<p>{oilData.summaryPanel.botanicalFamily}</p>
					</div>
				{/if}

				<!-- Origin -->
				{#if oilData.summaryPanel?.origin}
					<div class='flex flex-col justify-between xs:flex-row'>
						<p class='font-semibold'>{locales.origin[lang]}:</p>
						<p>{oilData.summaryPanel.origin}</p>
					</div>
				{/if}

				<!-- Extraction method -->
				{#if oilData.summaryPanel?.extractionMethod}
					<div class='flex flex-col justify-between xs:flex-row'>
						<p class='font-semibold'>{locales.extractionMethod[lang]}:</p>
						<p>{oilData.summaryPanel.extractionMethod}</p>
					</div>
				{/if}

				<!-- Active substances -->
				{#if oilData.summaryPanel?.activeIngredients}
					<div class='flex flex-col justify-between xs:flex-row'>
						<p class='font-semibold'>{locales.activeSubstances[lang]}:</p>

						<ul class='flex flex-col list-disc ml-3'>
							{#each oilData.summaryPanel.activeIngredients as ingredient}
								<li>{ingredient.children[0].text}</li>
							{/each}
						</ul>
					</div>
				{/if}

				{#if oilData.description}
					<hr class='border-primary'>
					<p>{oilData.description}</p>
				{/if}

			</div>
		</SummaryPanel>
		<!--	Render all sections-->
		<p>Historical info</p>
		<p>Theorapeutic usage</p>
		<p>Usage situations</p>
		<p>Mental effect</p>
		<p>Soul effect</p>
	{:else }
		<p>Oil not found</p>
	{/if}
</Wrapper>



