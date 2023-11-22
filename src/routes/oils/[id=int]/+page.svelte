<script>
	import { page } from '$app/stores';

	export const load = async ({ parent }) => {
		await parent();
	};

</script>
<h1>Oil page</h1>

<p>Oil ID: {$page.params.id}</p>