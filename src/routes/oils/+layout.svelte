<script>
	import Wrapper from '$components/Wrapper.svelte';
	import TopScrollButton from '$components/Oils/TopScrollButton.svelte';
	import Footer from '$components/Footer.svelte';

	export let data;
	const lang = data.lang;
</script>

<Wrapper mobilePadding={true} extraClasses='-mt-20'>
	<slot />
</Wrapper>
<TopScrollButton />
<Footer {lang} />