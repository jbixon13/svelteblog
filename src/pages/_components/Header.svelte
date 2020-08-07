<script>
</script>

<main>
    <header>
        <a href='/'>
            <img src='/logo.png' alt='Home button and logo'/>
        </a>
        <ul>
            <a href='/'>
                <li>Home</li>
            </a>
            <a href='/about'>
                <li>About</li>
            </a>
            <a href='/portfolio'>
                <li>Portfolio</li>
            </a>
            <a href='/contact'>
                <li>Contact</li>
            </a>
        </ul>
    </header>
</main>

<style>
    header {
        width: auto;
        height: 70px;
        box-sizing: border-box;
        display: block;
        position: relative;
        background-color: var(--primary-color);
        width: 100%;
        z-index: 2;
        color: var(--black);
        border-bottom: 1px solid var(--black);
        box-shadow: 0 1px 6px rgba(0, 0, 0, 0.05);
    }

    img {
        width: 24px;
        margin-top: 22px;
        margin-left: 24px;
    }

    ul {
        float: right;
        font-weight: 300;
        margin-top: 22px;
        margin-right: 24px;
        margin-left: -40px;
    }

    li {
        font-size: 12px;
        margin-left: 24px;
        text-transform: uppercase;
        color: var(--white-text);
        text-decoration: none;
        display: inline-block;
    }

    ul:first-child {
        margin: 0;
    }

    li:hover {
        color: var(--white-text-hover);
        transition: 0.2s;
    }

    @media (min-width: 768px) {
        img {
            margin-top: 16px;
            margin-left: 96px;
            width: 36px;
        }

        ul {
            margin-right: 96px;
        }
    }

    @media (min-width: 1080px) {
        img {
            margin-top: 16px;
            margin-left: 11.5%;
            width: 36px;
        }

        ul {
            margin-right: 11.5%;
        }
    }
</style>