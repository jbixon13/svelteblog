<script>
    import { url } from '@sveltech/routify';
    export let article;
</script>

<main>
    <a href={$url('/blog/' + article.link)}>
        <img src={'/images/previews/' + article.preview} alt='article preview' />
        <h3>{article.title}</h3>
        <p>{article.subtitle}</p>
    </a>
</main>

<style>
</style>