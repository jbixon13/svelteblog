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
        <img src="https://img.icons8.com/android/24/000000/sun.png" alt='Click to activate light mode' />
    {:else}
        <img src="https://img.icons8.com/ios-glyphs/30/000000/moon-symbol.png" alt='Click to activate dark mode' />
    {/if}
</button>

<style>
    button {
        background: transparent;
    }
</style>