<script>
	import locales from '$lib/locales/oils/locales.json';
	import Wrapper from '$components/Wrapper.svelte';
	import TopBackground from '$components/TopBackground.svelte';
	import SummaryPanel from '$components/SummaryPanel.svelte';
	import Accordion from '$components/Oils/Accordion.svelte';
	import Footer from '$components/Footer.svelte';
	import SummaryText from '$components/Oils/SummaryText.svelte';
	import TopScrollButton from '$components/Oils/TopScrollButton.svelte';

	export let data;
	const lang = data.lang;
	$: oilData = data.oil;
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
				{#if oilData.nameRu}
					<h3>{oilData.nameRu}</h3>
				{/if}
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
					<SummaryText header={locales.latinName[lang]} text={oilData.summaryPanel.latinName} />
				{/if}

				<!-- Botanical family -->
				{#if oilData.summaryPanel?.botanicalFamily}
					<SummaryText header={locales.family[lang]} text={oilData.summaryPanel.botanicalFamily} />
				{/if}

				<!-- Origin -->
				{#if oilData.summaryPanel?.origin}
					<SummaryText header={locales.origin[lang]} text={oilData.summaryPanel.origin} />
				{/if}

				<!-- Extraction method -->
				{#if oilData.summaryPanel?.extractionMethod}
					<SummaryText header={locales.extractionMethod[lang]} text={oilData.summaryPanel.extractionMethod} />
				{/if}

				<!-- Active substances -->
				{#if oilData.summaryPanel?.activeIngredients}
					<div class='flex flex-col justify-between xs:flex-row gap-1'>
						<p class='font-semibold basis-2/5'>{locales.activeSubstances[lang]}:</p>

						<ul class='basis-3/5 flex flex-col list-disc ml-3'>
							{#each oilData.summaryPanel.activeIngredients as ingredient}
								<li>{ingredient.children[0].text}</li>
							{/each}
						</ul>
					</div>
				{/if}

			</div>
		</SummaryPanel>

		<!-- Description -->
		{#if oilData.description}
			<div>
				<p class='mb-2 ml-3 leading-relaxed'>{oilData.description}</p>
			</div>
		{/if}

		<Accordion sections={oilData.textSections} />
	{:else }
		<p>Oil not found</p>
	{/if}
</Wrapper>
<TopScrollButton />
<Footer {lang} />




