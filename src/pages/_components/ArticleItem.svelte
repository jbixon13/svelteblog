<script>
    import { url } from '@sveltech/routify';
    export let article;
</script>

<main>
    <h3>{article.title}</h3>
    <p>{article.subtitle}</p>
    <a href={$url('/blog/' + article.link)}>Link</a>
</main>

<style>
</style>