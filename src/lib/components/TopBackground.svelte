<script>
	import Wrapper from '$components/Wrapper.svelte';
	import BackButton from '$components/BackButton.svelte';

	/*
	This component is called from index.layout.svelte file
	 */
	export let oils = 'Масла';
	export let blends = 'Смеси';
	export let home = 'Главная';
	export let back = 'Назад';
</script>

<div class='background h-36 overflow-auto'>

	<Wrapper mobilePadding={true} extraClasses='h-24 w-full'>
		<!--		<div class='flex justify-between'>-->
		<BackButton {oils} {blends} {home} {back} />
		<!--			<PDFButton />-->
		<!--		</div>-->
	</Wrapper>
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
            ), url('$lib/images/flower-medium.webp');
        }
    }

    @media (min-width: 1024px) {
        .background {
            background-image: linear-gradient(
                    to bottom, transparent, var(--background-colour)
            ), url('$lib/images/flower-large.webp');
        }
    }
</style>