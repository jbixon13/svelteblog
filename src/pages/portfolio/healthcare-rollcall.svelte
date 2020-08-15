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
        <div class='project'>
            <div class='project-header'>
                <h1 class='title'>{project.title}</h1>
                <p class='subtitle'>{project.subtitle}</p>
            </div>
            <img src={'/images/portfolio-previews/' + project.preview} alt='Project preview'/>
            <div class='links'>
                <h2>
                    <a href='https://healthcare-rollcall.netlify.app/' target='_blank' rel='noopener noreferrer'>See the app</a>
                </h2>
                <h2>
                    <a href='https://github.com/CodeForBaltimore/Healthcare-Rollcall' target='_blank' rel='noopener noreferrer'>See the code</a>
                </h2>
            </div>
            <h2>What it is:</h2>
            <ul>
                <li>An emergency response management tool for the city of Baltimore</li>
                <li>Generalized API handles data and user authentication</li>
                <li>Frontend built for healthcare providers to check in with the city</li>
                    <ul>
                        <li>Originally planned to track power status in weather emergencies/blackouts</li>
                        <li>Fast-tracked during COVID-19 pandemic to track PPE & symptoms</li>
                        <li>Built to allow different questionnaires to be used depending on the nature of the emergency</li>
                    </ul>
            </ul>
            <h2>What I did:</h2>
            <ul>
                <li>Prototyped map component to display healthcare providers' status across city</li>
                <li>Implemented Bootstrap & fixed responsive styling issues</li>
                <li>Onboarded new contributors & helped troubleshoot their dev environments</li>
                <li>Coordinated dev environment between frontend, backend, & db with <code>Docker Compose</code></li>
            </ul>
            <h2>What I learned:</h2>
            <ul>
                <li>Frontend</li>
                    <ul>
                        <li>Vue</li>
                        <li>Leaflet in Vue</li>
                        <li>Bootstrap 4</li>
                    </ul>
                <li>Backend</li>
                    <ul>
                        <li>Bash scripting</li>
                        <li>Docker Compose</li>
                    </ul>
            </ul>
            <h2>Why it interests me:</h2>
            <ul>
                <li>The city's ability to track hundreds of providers was limited to pen & paper</li>
                <li>Working on a fast-paced team to help the city manage crises is exciting</li>
                <li>Modern, Open-Source solutions to city infrastructure benefit everyone</li>
            </ul>
        </div>
    </PortfolioContainer>
    <Footer />
</main>