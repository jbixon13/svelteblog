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
        display: flex;
        flex-wrap: wrap;
        text-align: center;
        margin-top: 32vh;
        margin-bottom: 32vh;
        list-style: none;
    }

    li {
        flex: 1 0 21%;
    }

    img {
        width:30px;
    }

    @media (min-width: 768px) {
        ul {
            margin-top: 40vh;
            margin-bottom: 40vh;
        }
    }
</style>