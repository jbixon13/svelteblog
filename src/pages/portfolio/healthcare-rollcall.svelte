<script>
    import Header from '../_components/Header.svelte'
    import Footer from '../_components/Footer.svelte'
    import PortfolioContainer from './_components/PortfolioContainer.svelte'
    import { projects } from '../../stores.js'

    let project = $projects[1];
</script>

<main>
    <Header />
    <PortfolioContainer>
        <p>Hello</p>
    </PortfolioContainer>
    <Footer />
</main>