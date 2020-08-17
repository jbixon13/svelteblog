<slot></slot>

<style>
    :global(.project-header) {
        padding-top: 2rem;
        padding-bottom: 2rem;
        overflow-x: hidden;
        border-bottom: 1px solid var(--line);
    }

    :global(.project-header .title) {
        grid-column: text;
        font-size: 40px;
        font-weight: 700;
        line-height: 1.1em;
        margin: 0 0 0.5rem;
    }

    :global(.project-header .subtitle) {
        margin: 0 0 0 0;
        font-weight: 300;
        font-size: 1.2rem;
        line-height: 1.55rem;
    }

    :global(.project) {
        margin-left: 24px;
        margin-right: 24px;
    }

    :global(.project p) {
        font-size: 16px;
    }

    :global(.project img) {
        width: 50%;
        margin-left: 25%;
        margin-right: 25%;
        padding-top: 24px;
    }

    :global(.project .links) {
        display: grid;
        grid-template-columns: 1fr 1fr;
    }

    :global(.project .links h2:first-of-type) {
        justify-self: left;
    }

    :global(.project .links h2:last-of-type) {
        justify-self: right;
    }

    :global(.project .links-single) {
        display: grid;
        grid-template-columns: 1fr;
    }

    :global(.project .links-single h2) {
        justify-self: center;
    }

    :global(.project li) {
        list-style: url('https://api.iconify.design/oi-chevron-right.svg?width=.6em');
        margin-top: 0.25em;
        margin-bottom: 0.25em;
    }

    :global(.project li a) {
        font-weight: 600;
        color: var(--accent-color);
    }

    :global(.project code) {
        font-family: Menlo,Monaco,Consolas,"Courier New",monospace;
        padding: 2px 4px;
        color: #004276;
        background-color: rgb(207, 223, 235);
        border-radius: 4px;
    }

    /* @media (prefers-color-scheme: dark) {
        :global(.project-header) {
            border-bottom: 1px solid var(--primary-color);
        }
        :global(.project li) {
            list-style: url('https://api.iconify.design/oi-chevron-right.svg?color=rgba(255%2C255%2C255%2C0.8)&width=.6em');
        }
    } */

    @media (min-width: 768px) {
        :global(.project) {
            margin-left: 96px;
            margin-right: 96px;
        }

        :global(.project .links) {
            padding-left: 20%;
            padding-right: 20%
        }
    }

    @media (min-width: 1080px) {
        :global(.project) {
            margin-left: 20%;
            margin-right: 20%;
        }
    }
</style>