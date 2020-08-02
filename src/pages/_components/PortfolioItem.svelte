<script>
    import { url } from '@sveltech/routify';
    export let project;
</script>

<main>
    <a href={$url('/portfolio/' + project.link)}>
        <img src='/images/previews/new-blog.jpg' alt='Portfolio preview' />
        <h5>{project.title}</h5>
        <p>{project.subtitle}</p>
    </a>
</main>

<style>
    main {
        border: 1px solid var(--line-color);
        margin-bottom: 24px;
    }

    img {
        max-width: 100%;
    }

    h5 {
        margin: 10px;
    }

    p {
        margin: 10px;
    }

    @media (min-width: 768px) {
        main {
            margin-bottom: unset;
        }
    } 
</style>