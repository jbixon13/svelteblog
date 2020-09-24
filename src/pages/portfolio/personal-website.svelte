<script>
    import Header from '../_components/Header.svelte'
    import Footer from '../_components/Footer.svelte'
    import PortfolioContainer from './_components/PortfolioContainer.svelte'
    import { projects } from '../../stores.js'

    let project = $projects[0];
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
                    <a href='https://jasonbixon.netlify.app/' target='_blank' rel='noopener noreferrer'>See the app</a>
                </h2>
                <h2>
                    <a href='https://github.com/jbixon13/svelteblog' target='_blank' rel='noopener noreferrer'>See the code</a>
                </h2>
            </div>
            <h2>What it is:</h2>
            <ul>
                <li>A unified website for my blog and portfolio built with <code>Svelte.js</code></li>
                <li>A platform for technical writing and data journalism that meets my criteria:</li>
                    <ul>
                        <li>Quick pageloads</li>
                        <li>Simple project structure & development experience</li>
                        <li>Intuitive style assignment within components</li>
                        <li>Easy implementation of data viz tools (Mapbox, D3, scrollytelling)</li>
                    </ul>
            </ul>
            <h2>What I did:</h2>
            <ul>
                <li>Used the Blogdown and Distill packages to build portfolio and blog websites, respectively, in <code>R</code></li>
                <li>Rebuilt my Distill blog in React for better performance and full control over visualizations and styling</li>
                <li>Converted blog to <code>Svelte.js</code> for simpler workflows for data journalism tasks (animation, data viz)</li>
                <li>Added portfolio content to <code>Svelte</code> blog to unify blog and portfolio for the first time</li>
            </ul>
            <h2>What I learned:</h2>
            <ul>
                <li>Frontend frameworks</li>
                    <ul>
                        <li>React</li>
                        <li>Svelte</li>
                        <li>ES6 JS basics</li>
                    </ul>
                <li>Styling</li>
                    <ul>
                        <li>Responsive layouts</li>
                        <li>CSS Modules in React</li>
                        <li>CSS Grid & Flexbox</li>
                        <li>Sass</li>
                        <li>Component style-scoping in Svelte</li>
                    </ul>
            </ul>
            <h2>Why it interests me:</h2>
            <ul>
                <li>I am very opinionated about design and interaction in data visualization</li>
                <li>I did not have enough control over these details and learned new tools to accomplish this</li>
                <li>There is little discussion or consensus on the intersection of data science and web development</li>
                <li>The future of <code>R</code> may rely on better support for rich interactivity in data visualization</li>
            </ul>
        </div>
    </PortfolioContainer>
    <Footer />
</main>