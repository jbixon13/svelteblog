<script>
    import Header from '../_components/Header.svelte'
    import Footer from '../_components/Footer.svelte'
    import ArticleContainer from './_components/ArticleContainer.svelte'
    import { articles } from '../../stores.js'
    
    let article = $articles[2];
</script>

<main>
    <Header />
    <ArticleContainer>
        <div class='article'>
            <div class='article-header'>
                <h1 class='title'>{article.title}</h1>
                <p class='subtitle'>{article.subtitle}</p>
            </div>
            <p>I have said in the past that sometimes I need to learn things outside of my direct area of interest in order to get better at what does interest me. At the time it was learning web development basics (<code>HTML</code>, <code>CSS</code>) in order to share my analyses with the world and make them more attractive. I have reached another round of this process, and may have even accepted my fate less begrudgingly than previously.</p>
            <p>I found myself stuck while working on a project for <a href='https://www.codeforbaltimore.org'>Code for Baltimore</a>. The goal was to build a web application that could visualize where nonprofits operate in Baltimore City and the connections that different organizations share. I spent time learning <code>Shiny</code> and built a simple interactive web application in a short amount of time. Managing its infrastructure became a frustratingly difficult task. All I needed was to build an application, host it on a web service under a custom domain, and automatically re-deploy everytime changes were pushed to Github. What became complicated were all the restrictions around hosting while keeping the tool free as it was only a proof of concept.</p>
            <p>There were several problems, but they all boiled down to <code>Shiny</code> not being an out-of-the-box solution if you don’t want to host it on <a href='https://www.shinyapps.io'>shinyapps.io</a>. It is simple enough to host on <code>Heroku</code>, <code>AWS</code>, <code>GCP</code>, or others but only if you are building in something like <code>Node.js</code>, <code>Python</code>, or <code>Go</code>. I wanted to continue building in <code>R</code> if possible, but more importantly I wanted to make end-to-end web app development possible to others with little DevOps knowledge even if they don’t use those languages. Many in the <code>R</code> community come from a statistical background and not a CS/software background; getting stuck without experience in deployment is frustrating.</p>
            <p>Ultimately I built <a href='https://www.github.com/jbixon13/shinyhero'>Shinyhero</a> as a template for <a href='https://www.codeforbaltimore.org'>Code for Baltimore</a> developers to reduce as much friction as possible when building a solution. This could be extended to anyone interested in building production-grade web applications without experience in robust deployment solutions. It utilizes concepts like containerization, automated CI/CD, and package management; I still have a lot to learn about concepts like unit testing or load balancing. More importantly, what I built checks every box I needed and lets me focus on building.</p>
        </div>
    </ArticleContainer>
    <Footer />
</main>