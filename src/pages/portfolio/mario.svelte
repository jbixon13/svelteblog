<script>
    import Header from '../_components/Header.svelte'
    import Footer from '../_components/Footer.svelte'
    import PortfolioContainer from './_components/PortfolioContainer.svelte'
    import { projects } from '../../stores.js'

    let project = $projects[2];
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
                    <a href='mario-plumber.herokuapp.com/hello/world' target='_blank' rel='noopener noreferrer'>See the app</a>
                </h2>
                <h2>
                    <a href='https://github.com/jbixon13/mario' target='_blank' rel='noopener noreferrer'>See the code</a>
                </h2>
            </div>
            <h2>What it is:</h2>
            <ul>
                <li>A REST API built using <a href='https://www.rplumber.io/'>Plumber</a> in <code>R</code></li>
                <li>Allows for the full statistical power of <code>R</code> to be used with any platform</li>
                <li>Backend service used to process data for any of my work</li>
                    <ul>
                        <li>Can push static data to an S3 bucket which is then fetched by frontend app</li>
                        <li>Can recieve requests from frontend app and return results more interactively</li>
                    </ul>
            </ul>
            <h2>What I did:</h2>
            <ul>
                <li>Built a mounted router to split the API into multiple files that serve as endpoints</li>
                <li>Converted existing analyses to APIs using Plumber's syntax</li>
                <li>Set up an S3 bucket to host data written out from the API</li>
                <li>Dockerized the API so it can be hosted on any cloud platform</li>
                <li>Hosted the <code>Docker</code> container on <code>Heroku</code></li>
                <li>Set up a CI/CD pipeline through <code>Travis</code> so changes are re-deployed automatically</li>
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