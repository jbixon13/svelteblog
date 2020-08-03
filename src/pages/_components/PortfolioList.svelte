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
            column-count: 3;
            column-gap: 24px;
            margin-left: 96px;
            margin-right: 96px;
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