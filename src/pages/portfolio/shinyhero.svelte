<script>
    import Header from '../_components/Header.svelte'
    import Footer from '../_components/Footer.svelte'
    import PortfolioContainer from './_components/PortfolioContainer.svelte'
    import { projects } from '../../stores.js'

    let project = $projects[3];
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
            <div class='links-single'>
                <h2>
                    <a href='https://github.com/jbixon13/shinyhero' target='_blank' rel='noopener noreferrer'>See the template</a>
                </h2>
            </div>
            <h2>What it is:</h2>
            <ul>
                <li>A template for building Shiny applications and hosting them on Heroku (or other PaaS)</li>
                <li>An automated pipeline for the development lifecyle of an application</li>
            </ul>
            <h2>What I did:</h2>
            <ul>
                <li>Created a minimal example of a Shiny application locally</li>
                <li>Set up <a href='https://github.com/rstudio/renv'>renv</a> to responsibly handle package dependencies</li>
                <li>Wrote a <code>Dockerfile</code> to containerize the app for hosting</li>
                <li>Wrote a <code>.travis.yml</code> to automate the CI/CD process to Heroku on each push to Github</li>
            </ul>
            <h2>What I learned:</h2>
            <ul>
                <li>PaaS</li>
                    <ul>
                        <li>Heroku</li>
                    </ul>
                <li>DevOps</li>
                    <ul>
                        <li>Docker</li>
                        <li>Travis CI</li>
                        <li>CI/CD pipeline</li>
                        <li>Container Registries</li>
                    </ul>
                <li>Package management</li>
                    <ul>
                        <li>Renv</li>
                    </ul>
            </ul>
            <h2>Why it interests me:</h2>
            <ul>
                <li>Shiny applications are not necessarily written by people with experience in DevOps or web infrastructure</li>
                <li><a href='https://www.shinyapps.io/'>Shinyapps.io</a> allows Shiny developers to deploy easily, but with many restrictions at the free tier</li>
                <li>Rather than learning another language or framework, this tool allows R users more freedom in deployment</li>
                <li>I struggled to understand how to get these tools to work together and want to contribute my solution to the R ecosystem</li>
            </ul>
        </div>
    </PortfolioContainer>
    <Footer />
</main>