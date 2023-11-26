<script>
	export const load = async ({ parent }) => {
		await parent(); // for auth check
	};

	export let data;
	$: oils = data.oils;
</script>


<h1>Oils page</h1>
<a href='/oils?filter=oil'>Single oils</a>
<a href='/oils?filter=blend'>Blends</a>
<p>Here are our oils</p>
{#if oils && oils.length}
	<ul>
		{#each oils as oil}
			<li><a href={`/oils/${oil.slug.current}`}> {oil.nameEn} </a> - {oil.description ?? ''}</li>

		{/each}
	</ul>
{:else}
	<p>No oils found.</p>
{/if}