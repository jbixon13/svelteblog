<script>
    import Header from './_components/Header.svelte'
    import Footer from './_components/Footer.svelte'
</script>

<main>
    <Header />
    <ul>
        <li>
            <a href='mailto:jbixon13@gmail.com'>
                <img src='/images/contact-icons/email.svg' alt='Email link'/>
            </a>
        </li>
        <li>
            <a href='https://www.github.com/jbixon13'>
                <img src='/images/contact-icons/github.svg' alt='Github link'/>
            </a>
        </li>
        <li>
            <a href='https://www.twitter.com/bixondata'>
                <img src='/images/contact-icons/twitter.svg' alt='Twitter link'/>
            </a>
        </li>
        <li>
            <a href='https://www.linkedin.com/in/jasonbixon'>
                <img src='/images/contact-icons/linkedin.svg' alt='LinkedIn link'/>
            </a>
        </li>
    </ul>
    <Footer />
</main>

<style>
    ul {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        justify-items: center;
        padding: unset;
        margin-top: 32vh;
        margin-bottom: 32vh;
        list-style: none;
    }

    img {
        width:30px;
        transition: ease-out 0.2s;
    }

    img:hover {
        width: 34px;
        transition: ease-out 0.2s;
    }

    @media (min-width: 768px) {
        ul {
            margin-top: 40vh;
            margin-bottom: 40vh;
        }
    }
</style>