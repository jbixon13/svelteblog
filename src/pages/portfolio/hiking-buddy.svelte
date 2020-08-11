<script>
    import Header from '../_components/Header.svelte'
    import Footer from '../_components/Footer.svelte'
    import PortfolioContainer from './_components/PortfolioContainer.svelte'
    import { projects } from '../../stores.js'

    let project = $projects[4];
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
                    <a href='https://github.com/jbixon13/hiking-buddy' target='_blank' rel='noopener noreferrer'>See the code</a>
                </h2>
            </div>
            <h2>What it is:</h2>
            <ul>
                <li>An AR (Augmented Reality) app that lets you see a tabletop map of your chosen hiking location in 3D</li>
                <li>A unique way to explore trails you have been on or want to understand before trying</li>
            </ul>
            <h2>What I did:</h2>
            <ul>
                <li>Overlayed the standard Mapbox satellite map with relevant features in Mapbox Studio</li>
                <li>Used the TabletopAR scene in the Maps for Unity SDK</li>
                <li>Built custom prefabs to show features like mountains in large floating text</li>
                <li>Built the application to Android for use with ARCore</li>
            </ul>
            <h2>What I learned:</h2>
            <ul>
                <li>Mapbox</li>
                    <ul>
                        <li>Mapbox Studio</li>
                        <li>Vector tiles</li>
                    </ul>
                <li>Unity 3D </li>
                    <ul>
                        <li>Maps for Unity SDK</li>
                        <li>Custom prefabs</li>
                        <li>Android development</li>
                        <li>Git LFS</li>
                    </ul>
            </ul>
            <h2>Why it interests me:</h2>
            <ul>
                <li>Topographic maps don’t always give an impressionable sense of scale when viewed in 2D</li>
                <li>Having a tactile and interactive view of terrain data allows for novel interactions with it</li>
                <li>Augmented Reality is a useful medium for exploring data, especially spatial</li>
            </ul>
        </div>
    </PortfolioContainer>
    <Footer />
</main>