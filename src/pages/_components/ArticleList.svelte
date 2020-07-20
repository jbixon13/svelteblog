<script>
    import { articles } from '../../stores.js';
    import ArticleItem from './ArticleItem.svelte'
</script>

<main>
    <ul>
	    {#each $articles as article}
            <ArticleItem article={article}/>
	    {/each}
    </ul>
</main>

<style>
</style>