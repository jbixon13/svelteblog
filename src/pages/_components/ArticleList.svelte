<script>
    import { articles } from '../../stores.js'
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
    ul {
        margin: 24px 24px 24px 24px;
        padding: unset;
    }

    @media (min-width: 768px) {
        ul {
            margin-top: 60px;
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