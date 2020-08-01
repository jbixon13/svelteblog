<script>
    import { url } from '@sveltech/routify';
    export let project;
</script>

<main>
    <h1>{project.title}</h1>
    <a href={$url('/portfolio/' + project.link)}>Link here</a>
</main>