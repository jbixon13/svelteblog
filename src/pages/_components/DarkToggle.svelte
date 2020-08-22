<script>
    import { darkMode } from '../../stores.js';

    function toggle() {
        $darkMode = !$darkMode;

        window.document.body.classList.toggle('dark-mode');
    }

    // determine whether dark mode is preferred & apply by default if so
    const darkPreferred = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (darkPreferred && $darkMode == false) {
        toggle();
    }
</script>

<button on:click={toggle}>
    {#if $darkMode}
        <img src='/images/dark-mode/sun-button.svg' alt='Click to activate light mode' />
    {:else}
        <img src='/images/dark-mode/moon-button.svg' alt='Click to activate dark mode' />
    {/if}
</button>

<style>
    button {
        background: var(--primary-color);
        border: none;
        margin-top: 15px;
        margin-left: 24px;
    }

    button:active{
        background: var(--primary-color);
    }

    img {
        width: 24px;
    }

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