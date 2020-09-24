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
            <p class='editors-note'>Editor's Note: This article was previously created using different tools and its visuals or performance don't reflect my current standards. I will convert it and give it a proper home here but don't want to focus on old work at the moment. <a href='https://jasonbixonblog.netlify.app/posts/2019-04-14-mta-shutdown/'>You can see it in its former glory here</a></p>
        </div>
    </ArticleContainer>
    <Footer />
</main>