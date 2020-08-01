<script>
    import Header from './_components/Header.svelte'
    import Footer from './_components/Footer.svelte'
</script>

<main>
    <Header />
    <ul>
        <li>
            <a href='mailto:jbixon13@gmail.com'>Mail</a>
        </li>
        <li>
            <a href='https://www.github.com/jbixon13'>Github</a>
        </li>
        <li>
            <a href='https://www.twitter.com/bixondata'>Twitter</a>
        </li>
        <li>
            <a href='https://www.linkedin.com/in/jasonbixon'>LinkedIn</a>
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