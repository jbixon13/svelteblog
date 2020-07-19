<script>
    import Scroller from '@sveltejs/svelte-scroller';

    let index, offset, progress;
</script>

<main>
    <h1>Prototype Svelte Viz</h1>
    <p>Is Svelte a better solution than React for data journalism?</p>
    <Scroller top={0.2} bottom={0.8} bind:index bind:offset bind:progress>
        <div slot='background'>
            <p>This is the background content that will not move</p>
            <p>Section {index + 1} is currently active </p>
        </div>

        <div slot='foreground'>
            <section>This is the first section</section>
            <section>This is the second section</section>
            <section>This is the third section</section>
        </div>
    </Scroller>
</main>

<style>
    main {
        margin-left: 10vw;
        margin-right: 10vw;
    }

    [slot="background"] {
		background-color: rgba(255,62,0,0.05);
		border-top: 2px solid #ff3e00;
		border-bottom: 2px solid #ff3e00;
		font-size: 1.4em;
		overflow: hidden;
		padding: 1em;
    }
    
    [slot="background"] p {
		margin: 0;
	}

    section {
        height: 80vh;
        background-color: rgba(0,0,0,0.5);
		color: white;
		padding: 1em;
		margin: 0 0 2em 0;
    }
</style>