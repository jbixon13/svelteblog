<script>
    import Header from '../_components/Header.svelte'
    import Footer from '../_components/Footer.svelte'
    import PortfolioContainer from './_components/PortfolioContainer.svelte'
    import { projects } from '../../stores.js'

    let project = $projects[7];
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
                    <a href='https://swimlab.weebly.com/pact-pro-environmental-action-lab.html' target='_blank' rel='noopener noreferrer'>See the lab</a>
                </h2>
            </div>
            <h2>What it is:</h2>
            <ul>
                <li>A social psychology lab directed by <a href='https://scholar.google.com/citations?user=JQSxXl8AAAAJ&hl=en'>Janet Swim</a></li>
                <li>Focused on modeling and facilitating pro-environmental behavior</li>
                <li>Experimental studies occuring both in and out of the lab setting</li>
            </ul>
            <h2>What I did:</h2>
            <ul>
                <li>Reviewed literature to identify outcome measures for replication studies</li>
                <li>Proposed a study to a town council testing science-based justifications for renewable energy adoption</li>
                <li>Led participants through studies</li>
                    <ul>
                        <li>Fish Simulation Study: Lab study testing whether anger leads to increased competitiveness in commons dilemmas</li>
                        <li>Nature Walk Study: Outdoor study testing whether exposure to natural environments reduces self-focused thoughts</li>
                    </ul>
                <li>Facilitated data collection</li>
                    <ul>
                        <li>Walked participants through informed consent</li>
                        <li>Maintained consistency in experience for data integrity</li>
                        <li>Built cover story to improve data quality by increasing competitiveness</li>
                    </ul>
            </ul>
            <h2>What I learned:</h2>
            <ul>
                <li>CITI IRB/Human Subjects Research Certification</li>
                <li>Literature Review</li>
                <li>Scientific Communication</li>
                <li>Study Facilitation</li>
                    <ul>
                        <li>Informed Consent</li>
                        <li>Data Security</li>
                        <li>Data Collection</li>
                        <li>Subject pool assignment</li>
                    </ul>
            </ul>
            <h2>Why it interests me:</h2>
            <ul>
                <li>Meaningful climate change aversion must come from behavioral and policy changes</li>
                <li>Understanding psychological or societal barriers to pro-environmental behavior can inform smarter policy</li>
                <li>Contributing to a field in novel ways is rewarding and exciting</li>
            </ul>
        </div>
    </PortfolioContainer>
    <Footer />
</main>