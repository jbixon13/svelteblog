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
                    <a href='http://www.syncthecity.in/' target='_blank' rel='noopener noreferrer'>See the app</a>
                </h2>
                <h2>
                    <a href='https://github.com/CodeForBaltimore/CitySync' target='_blank' rel='noopener noreferrer'>See the code</a>
                </h2>
            </div>
            <h2>What it is:</h2>
            <ul>
                <li>A tool for nonprofit organizations in Baltimore City</li>
                <li>Identify who is working on what, where, and with whom</li>
                <li>Show this information in an intuitive way</li>
                <li>Allow for more effective collaboration and resource allocation</li>
            </ul>
            <h2>What I did:</h2>
            <ul>
                <li>Developed interactive visualizations for user exploration</li>
                <li>Prioritized feature development for Minimum Viable Product</li>
                <li>Built and deployed a Shiny web application</li>
            </ul>
            <h2>What I learned:</h2>
            <ul>
                <li>Web Development</li>
                    <ul>
                        <li>Shiny</li>
                        <li>Bootstrap</li>
                        <li>Reactive programming in R</li>
                        <li>Front-end design</li>
                    </ul>
                <li>Web Mapping</li>
                    <ul>
                        <li>Leaflet</li>
                        <li>Google Maps Platform API</li>
                        <li>Map projections and transformations</li>
                    </ul>
            </ul>
            <h2>Why it interests me:</h2>
            <ul>
                <li>Enabling organizations with social justice missions is important</li>
                <li>Allowing users to explore data themselves can open opportunities</li>
                <li>Building a tool instead of an analysis requires a different approach</li>
                <li>Designing for non-technical audiences is a challenge</li>
            </ul>
        </div>
    </PortfolioContainer>
    <Footer />
</main>