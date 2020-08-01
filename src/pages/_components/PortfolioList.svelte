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
    
</style>