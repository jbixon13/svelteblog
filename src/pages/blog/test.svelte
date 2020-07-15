<script>
    import Scroller from '@sveltejs/svelte-scroller';

    let index, offset, progress;
</script>

<main>
    <h1>Prototype Svelte Viz</h1>
    <p>Is Svelte a better solution than React for data journalism?</p>
    <!-- <Scroller top={0.2} bottom={0.8} bind:index bind:offset bind:progress>
        <div slot='background'>
            <p>This is the background content that will not move</p>
            <p>Section {index + 1} </p>
        </div>
    </Scroller> -->
</main>

<style>
    main {
        margin-left: 10vw;
        margin-right: 10vw;
    }
</style>