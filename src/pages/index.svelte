<script>
    import Header from './_components/Header.svelte'
    import ArticleList from './_components/ArticleList.svelte'
    import Footer from './_components/Footer.svelte'
    import { metatags } from '@sveltech/routify'
    metatags.title = 'Jason Bixon'
    metatags.description = 'A collection of my thoughts and projects'
    metatags.image = `https://deploy-preview-4--jasonbixonsvelte.netlify.app/social-card.png`
    metatags['twitter:card'] = 'summary_large_image'
</script>

<Header />
<ArticleList /> 
<Footer />