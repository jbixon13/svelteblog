<script>
    import Header from './_components/Header.svelte'
    import ArticleList from './_components/ArticleList.svelte'
    import Footer from './_components/Footer.svelte'
    import { metatags } from '@sveltech/routify'
    metatags.title = 'Jason Bixon'
    metatags.description = 'A collection of my thoughts and projects'
</script>

<Header />
<ArticleList /> 
<Footer />