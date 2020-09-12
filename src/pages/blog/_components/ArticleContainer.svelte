<slot></slot>

<style>
    :global(.article-header) {
        padding-top: 2rem;
        padding-bottom: 2rem;
        overflow-x: hidden;
        border-bottom: 1px solid var(--line);
    }

    :global(.title) {
        grid-column: text;
        font-size: 40px;
        font-weight: 700;
        line-height: 1.1em;
        margin: 0 0 0.5rem;
    }

    :global(.subtitle) {
        margin: 0 0 0 0;
        font-weight: 300;
        font-size: 1.2rem;
        line-height: 1.55rem;
    }

    :global(.article) {
        margin-left: 24px;
        margin-right: 24px;
    }

    :global(.article p) {
        font-size: 18px;
    }

    :global(.article code) {
        font-family: Menlo,Monaco,Consolas,"Courier New",monospace;
        padding: 1px 2px;
        color: #004276;
        background-color: rgb(207, 223, 235);
        border-radius: 4px;
    }

    :global(.article .hljs) {
        padding: 1em;
        margin: .5em 0;
        overflow: auto;
        border-radius: .3em;
    }

    :global(.article .hljs code) {
        padding: unset;
        color: unset;
        background-color: unset;
        border-radius: unset;
    }

    :global(.article img) {
        width: 100%;
    }

    :global(.article a) {
        font-weight: 600;
        color: var(--accent-color);
    }

    :global(.article .editors-note) {
        font-weight: bold;
        font-size: 16px;
    }

    :global(.article .mapboxgl-map) {
        height: 100vh;
        width: 100vw;
        position: relative;
        left: calc(-50vw + 50%)
    }

    :global(.article .scroll-foreground section) {
        min-height: 20vh;
        background-color: rgba(68, 62, 62, 0.6);
        margin: 0 10% 60vh 10%;
        padding-left: 5%;
        padding-right: 5%;
        display: flex;
        justify-content: center;
        align-items: center;
        color: var(--white-text);
        text-align: center;
    }

    :global(.article .scroll-foreground section:last-of-type) {
        margin-bottom: unset;
    }

    @media (min-width: 768px) {
        :global(.article) {
            margin-left: 96px;
            margin-right: 96px;
        }
    }

    @media (min-width: 1080px) {
        :global(.article) {
            margin-left: 20%;
            margin-right: 20%;
        }

        :global(.article img) {
            width: 80%;
            margin-left: 10%;
            margin-right: 10%;
        }
    }
</style>