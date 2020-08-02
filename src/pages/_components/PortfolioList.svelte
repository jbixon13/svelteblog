<script>
    import { projects } from '../../stores.js'
    import PortfolioItem from './PortfolioItem.svelte'
</script>

<main>
    <ul>
	    {#each $projects as project}
            <PortfolioItem project={project}/>
	    {/each}
    </ul>
</main>

<style>
    ul {
        margin: 24px 24px 24px 24px;
        padding: unset;
    }

    @media (min-width: 768px) {
        ul {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            grid-gap: 2em;
        }
    }

    @media (min-width: 1080px) {
        ul {
            width: 984px;
            margin-left: auto;
            margin-right: auto;
        }
    }
</style>