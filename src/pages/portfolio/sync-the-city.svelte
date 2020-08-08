<script>
    import Header from '../_components/Header.svelte'
    import Footer from '../_components/Footer.svelte'
    import PortfolioContainer from './_components/PortfolioContainer.svelte'
    import { projects } from '../../stores.js'

    let project = $projects[5];
</script>

<main>
    <Header />
    <PortfolioContainer>
        <div class='project'>
            <div class='project-header'>
                <h1 class='title'>{project.title}</h1>
                <p class='subtitle'>{project.subtitle}</p>
            </div>
            <img src={'/images/portfolio-previews/' + project.preview} alt='Project preview'/>
            <div class='links'>
                <h2>
                    <a href='https://jasonbixonsvelte.netlify.app/' target='_blank' rel='noopener noreferrer'>See the app</a>
                </h2>
                <h2>
                    <a href='https://github.com/CodeForBaltimore/CitySync' target='_blank' rel='noopener noreferrer'>See the code</a>
                </h2>
            </div>
            <h2>What it is:</h2>
            <ul>
                <li>Item1</li>
                <li>Item2</li>
                    <ul>
                        <li>Sub-Item1</li>
                    </ul>
            </ul>
            <h2>What I did:</h2>
            <ul>
                <li>Item1</li>
                <li>Item2</li>
            </ul>
            <h2>What I learned:</h2>
            <ul>
                <li>Item1</li>
                <li>Item2</li>
            </ul>
            <h2>Why it interests me:</h2>
            <ul>
                <li>Item1</li>
                <li>Item2</li>
            </ul>
        </div>
    </PortfolioContainer>
    <Footer />
</main>