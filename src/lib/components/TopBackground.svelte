<script>
	import Wrapper from '$components/Wrapper.svelte';
</script>

<div class='background h-36'>
	<Wrapper mobilePadding={true} extraClasses='h-24 w-full' />
	<slot />
</div>

<style>
    .background {
        background-size: cover;
        background-image: linear-gradient(
                to bottom, transparent, var(--background-colour)
        ), url('$lib/images/flower-small.webp');
    }

    @media (min-width: 600px) {
        .background {
            background-image: linear-gradient(
                    to bottom, transparent, var(--background-colour)
            ), url('$lib/images/flower-small.webp');
        }
    }

    @media (min-width: 1024px) {
        .background {
            background-image: linear-gradient(
                    to bottom, transparent, var(--background-colour)
            ), url('$lib/images/flower-small.webp');
        }
    }
</style>