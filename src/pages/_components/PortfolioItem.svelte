<script>
    import { url } from '@sveltech/routify';
    export let project;
</script>

<main>
    <a href={$url('/portfolio/' + project.link)}>
        <h5>{project.title}</h5>
        <p>{project.subtitle}</p>
    </a>
</main>

<style>
    main {
        border: 1px solid var(--line-color);
    }
</style>