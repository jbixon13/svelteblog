<script>
    export let darkMode = false;

    function toggle() {
        darkMode = !darkMode;

        window.document.body.classList.toggle('dark-mode');

        // assign dark mode class to contact icons
        var contact = window.document.getElementsByClassName('contact-img')[0];
        contact.classList.toggle('dark-mode');

        // assign dark mode class to li tags within PortfolioContainers
        var portfolioList = window.document.querySelectorAll('.project li')[0];
        portfolioList.classList.toggle('dark-mode');

        // check for preferred color scheme
        // window
    }
</script>

<button on:click={toggle}>
    {#if darkMode}
        <img src='/images/dark-mode/sun-button.svg' alt='Click to activate light mode' />
    {:else}
        <img src='/images/dark-mode/moon-button.svg' alt='Click to activate dark mode' />
    {/if}
</button>

<style>
    button {
        background: var(--primary-color);
        border: none;
        margin-top: 16px;
        margin-left: 24px;
    }

    button:active{
        background: var(--primary-color);
    }

    img {
        width: 24px;
    }

    /* img {
        width: 24px;
        margin-top: 22px;
        margin-left: 24px;
    } */

    @media (min-width: 768px) {
        button {
            margin-top: 11px;
            margin-left: 96px;
        }

        img {
            width: 36px;
        }
    }

    @media (min-width: 1080px) {
        button {
            margin-left: 11.5%;
        }
    }
</style>