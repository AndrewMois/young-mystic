<script>
	import locales from '$lib/locales/oils/locales.json';
	import SummaryPanel from '$components/SummaryPanel.svelte';
	import Accordion from '$components/Oils/Accordion.svelte';
	import SummaryText from '$components/Oils/SummaryText.svelte';
	import BlendIngredients from '$components/Oils/BlendIngredients.svelte';

	export let data;
	const lang = data.lang;
	$: oilData = data.oil;
</script>
<svelte:head>
	{#if (oilData && oilData !== null && oilData !== undefined)}
		<title>{oilData?.nameEn} | YM</title>
		<meta property='og:title' content={`Эфирное масло ${oilData?.nameRu} | YM`} />
		<meta property='og:description' content={`Узнайте всё об эфирном масле ${oilData?.nameRu} в одном месте.`} />
		<meta property='og:image' content={oilData?.image} />
	{/if}
</svelte:head>

<!-- Navigation and Export to PDF buttons are located in the TopBackground.svelte component-->

{#if oilData && oilData !== null && oilData !== undefined}
	{#if oilData.image}
		<div class='flex justify-center w-full'>
			<img src={oilData.image} alt={'bottle of ' + data.oil.nameEn + ' essential oil'}
					 class='w-64 h-64 object-cover' />
		</div>
	{/if}

	<!-- Oil name section -->
	<div class='pl-3 py-4 flex justify-between'>
		<!--	Name -->
		<div>
			<h2 class='text-2xl font-semibold'>{oilData.nameEn}</h2>
			{#if oilData.nameRu}
				<h3>{oilData.nameRu}</h3>
			{/if}
		</div>

		<!--	Volume	-->
		<div class='flex justify-end items-center gap-2'>

			{#each oilData.volume as volume}
				<div class='whitespace-nowrap text-sm background-faded rounded-xl p-2'>
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

			<!-- Ingredients -->
			{#if oilData.ingredients && oilData.ingredients.length > 0}
				<BlendIngredients title={locales.constuents[lang]} ingredients={oilData.ingredients}
													additionalIngredients={oilData.additionalIngredients} />
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
{/if}



