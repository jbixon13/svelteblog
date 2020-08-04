<script>
    import { url } from '@sveltech/routify';
    export let article;
</script>

<main>
    <div class='metadata'>
        <p class='date'>{article.date}</p>
        <div class='tags'>
            {#each article.tags as tag}
                <p class='tag'>{tag}</p>
            {/each}
        </div>
    </div>
    <a href={$url('/blog/' + article.link)}>
        <img src={'/images/blog-previews/' + article.preview} alt='Article preview' />
        <h3 class='title'>{article.title}</h3>
        <p class='subtitle'>{article.subtitle}</p>
    </a>
</main>

<style>
    main {
        text-decoration: none;
        overflow: hidden;
        display: block;
        border-bottom: 1px solid var(--line-color);
        box-sizing: border-box;
        padding: 24px 0;
    }

    main:last-of-type {
        border-bottom: none;
    }

    .metadata {
        display: inline-block;
        font-size: 12px;
        line-height: 1.4em;
        margin-bottom: 18px;
    }

    .date {
        margin-right: 1em;
        color: var(--primary-color);
    }

    .tags {
        margin-top: 1em;
        text-align: center;
        display: flex;
    }

    .tag {
        color: var(--primary-color);
        font-size: 80%;
        border: 1px solid var(--primary-color);
        border-radius: 3px;
        text-transform: uppercase;
        font-weight: 500;
        padding-left: 5px;
        padding-right: 5px;
        margin-bottom: -3px;
        margin-right: 10px;
    }

    img {
        box-sizing: border-box;
        margin-bottom: 24px;
        position: relative;
        max-width: 100%;
    }

    .title {
        font-weight: 700;
        margin: 0 0 6px 0;
        line-height: 1.2em;
        font-style: normal;
    }

    .subtitle {
        margin: 0 0 12px 0;
        line-height: 1.4em;
        font-size: 16px;
    }

    @media (min-width: 768px) {
        main {
            margin-left: 72px;
            margin-right: 72px;
        }

        .metadata {
            display: block;
            float: left;
            width: 15%;
            margin-top: -5px;
        }

        .tags {
            display: unset;
        }

        .tag {
            margin-right: 40%;
            margin-bottom: 6px;

        }

        img {
            float: right;
            width: 35%;
            margin-bottom: 0;
        }

        .title {
            font-size: 26px;
        }

        .subtitle {
            margin: 0 0 12px 0;
            line-height: 1.5em;
            font-size: 16px;
        }
    }

    @media (min-width: 1080px) {
        main {
            margin-left: auto;
            margin-right: auto;
            font-size: 20px;
        }

        .tag {
            margin-right: 60%;
        }
    }
</style>