<script>
    import Header from './_components/Header.svelte'
    import ArticleList from './_components/ArticleList.svelte'
    import Footer from './_components/Footer.svelte'
    import { metatags } from '@sveltech/routify'
    metatags.title = 'My Routify app'
    metatags.description = 'Description coming soon...'
</script>

<Header />
<ArticleList /> 
<Footer />