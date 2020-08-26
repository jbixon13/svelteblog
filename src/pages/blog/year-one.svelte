<script>
    import Header from '../_components/Header.svelte'
    import Footer from '../_components/Footer.svelte'
    import ArticleContainer from './_components/ArticleContainer.svelte'
    import { articles } from '../../stores.js'
    
    let article = $articles[4];
</script>

<main>
    <Header />
    <ArticleContainer>
        <div class='article'>
            <div class='article-header'>
                <h1 class='title'>{article.title}</h1>
                <p class='subtitle'>{article.subtitle}</p>
            </div>
            <p>Thinking back to last summer feels like thinking back to a completely different person.</p>
            <p>I graduated Penn State with about as much technical literacy as I could fit into a business degree. I specialized in marketing analytics, worked as a research assistant in a psychology lab, and interned as a data analyst at a global ad agency, but even so I don’t feel I was prepared for the modern toolset used outside of academia. I was taught tools like <code>SPSS</code> and <code>Excel</code>; any programming experience came from seeking it out myself which meant I didn’t learn much without a clear application or end goal.</p>
            <p>When I interviewed for my first full-time data analyst positions I was comfortable with statistical thinking and visualization but had no experience with tools like <code>R</code> or <code>Python</code>. I was lucky enough to get hired and learned very quickly that it’s extremely unreasonable to learn programming without a destination in mind. I learned quicker than my previous attempts because I could learn a little at a time to reach the end result of a finished analysis that was well-defined from the beginning.</p>
            <p>I taught myself <code>R</code> and <code>SAS</code> simultaneously which was more confusing than I’d prefer; what sustained my growth the most was committing myself to learn one new concept in every project I took on. One of my biggest frustrations with <code>R</code> my first time learning it was just setting up my working directory properly to read files in. The first thing I learned was as simple as using projects within <code>R Studio</code> to avoid this problem. It was simple, but every project allowed me to be greater than the sum of those victories. I was learning not just new skills, but how to <strong>learn programming itself</strong>. Where to search for answers, what phrases to use to look for certain concepts, what examples I should emulate. This led to quick improvement in my work and my confidence in it.</p>
            <p>I continue to find roadblocks in the projects I take on and continue this effort to tackle them. There will always be new challenges; I remain confident by reflecting on the kinds of challenges I face now vs. a year ago. Last year I struggled with simple data processing techniques like joining, summarizing, & filtering. Now I work on subqueries and their mechanics within large and messy tables. Last year I was excited to share documentation in <code>Rmarkdown</code>. Now I am excited to deploy a <code>Shiny</code> application I developed to automate NLP techniques on open-ended survey responses. I wouldn’t even consider it last year and it’s just as complex now but much more attainable.</p>
            <p>I still have a lot to learn and I left out many details in this quick summary of the last year. To focus on one thing: There will always be someone who “just gets it” and makes everything you’ve struggled with seem trivial. All you can do is improve one step at a time and be better than you were yesterday.</p>
        </div>
    </ArticleContainer>
    <Footer />
</main>