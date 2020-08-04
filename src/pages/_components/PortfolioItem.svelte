<script>
    import { url } from '@sveltech/routify';
    export let project;
</script>

<main>
    <a href={$url('/portfolio/' + project.link)}>
        <img src={'/images/portfolio-previews/' + project.preview} alt='Portfolio preview' />
        <h4>{project.title}</h4>
        <p>{project.subtitle}</p>
    </a>
</main>

<style>
    main {
        box-shadow: 0 0 5px #ccc;
        margin-bottom: 24px;
        padding-top: 10px;
        padding-bottom: 10px;
    }

    main:hover {
        transition: 0.35s;
        box-shadow: 0 0 5px rgb(136, 132, 132);
    }

    img {
        max-width: 100%;
    }

    h4 {
        margin: 10px;
    }

    p {
        margin: 10px;
    }

    @media (min-width: 768px) {
        main {
            -webkit-column-break-inside: avoid;
            page-break-inside: avoid;
            break-inside: avoid;
        }
    } 
</style>