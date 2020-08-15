<script>
    import Header from '../_components/Header.svelte'
    import Footer from '../_components/Footer.svelte'
    import PortfolioContainer from './_components/PortfolioContainer.svelte'
    import { projects } from '../../stores.js'

    let project = $projects[6];
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
                    <a href='https://jasonbixonsvelte.netlify.app/' target='_blank' rel='noopener noreferrer'>See the poster</a>
                </h2>
                <h2>
                    <a href='https://github.com/jbixon13/Swim-Lab' target='_blank' rel='noopener noreferrer'>See the code</a>
                </h2>
            </div>
            <h2>What it is:</h2>
            <ul>
                <li>An experimental study to contribute to behavioral nudge theory</li>
                <li>The default effect overpowers individual choice </li>
                    <ul>
                        <li>
                            Even when decision-makers are aware of the presence of defaults
                        </li>
                    </ul>
                <li>Literature suggests testing the impact of transparency on defaults</li>
               <li>Our study: can transparent justifications for defaults impact renewable energy adoption?</li> 
            </ul>
            <h2>What I did:</h2>
            <ul>
                <li>Reviewed literature on behavioral nudging and the default effect</li>
                <li>Created experimental design to test hypothesis correctly</li>
                <li>Conducted power analysis to determine subjects needed</li>
                <li>Developed pre-screen and survey tools to test hypothesis</li>
                <li>Submitted IRB proposal and revised until accepted</li>
                <li>Administered survey online to subject pool</li>
                <li>Analyzed data to test hypotheses on outcome measures</li>
                <li>Presented findings at <a href='https://www.ama.org/'>2018 AMA ICC</a> and <a href='https://sites.psu.edu/psichi/'>local</a> <a href='https://undergradresearch.psu.edu/resources/opportunities/undergraduate-exhibition'>conferences</a></li>
                <li>Won third place at 2018 AMA ICC representing Penn State</li>
            </ul>
            <h2>What I learned:</h2>
            <ul>
                <li>Experimental Design</li>
                    <ul>
                        <li>Power Analysis</li>
                        <li>Factorial Design</li>
                        <li>Survey Design</li>
                        <li>Subject assignment and measurement</li>
                    </ul>
                <li>Data Analysis</li>
                    <ul>
                        <li>SPSS</li>
                        <li>Hypothesis testing</li>
                        <li>Variable interactions</li>
                    </ul>
                <li>Scientific Communication</li>
                    <ul>
                        <li>Poster design</li>
                        <li>Conference presentation</li>
                    </ul>
            </ul>
            <h2>Why it interests me:</h2>
            <ul>
                <li>Choice architecture has a powerful impact on decision-making</li>
                <li>Defaults can promote good or bad decisions but can’t be ignored</li>
                <li>We need to consider its influence, especially when developing policy</li>
                    <ul>
                        <li>It is amoral to ignore defaults when giving people choices</li>
                        <li>Moral leadership is needed to protect vulnerable populations</li>
                    </ul>
                <li>It can be used to challenge defaults when people make decisions </li>
                    <ul>
                        <li>Fossil fuel energy is the default in most architectures</li>
                        <li>Can renewables be adopted more by making them the default?</li>
                    </ul>

            </ul>
        </div>
    </PortfolioContainer>
    <Footer />
</main>