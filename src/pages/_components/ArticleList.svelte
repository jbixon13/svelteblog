<script>
    import { articles } from '../../stores.js';
    import ArticleItem from './ArticleItem.svelte'
</script>

<main>
    <h1>Let's test the ArticleList component:</h1>
    <ul>
	    {#each $articles as article}
            <ArticleItem article={article}/>
	    {/each}
    </ul>
</main>

<style>
</style>