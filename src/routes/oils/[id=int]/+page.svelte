<script>
    import {page} from "$app/stores";

    $: console.log($page.params.id)
</script>
<h1>Oil page</h1>

<p>Oil ID: {$page.params.id}</p>