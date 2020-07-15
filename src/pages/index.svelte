<script>
    import RoutifyIntro from './example/_components/RoutifyIntro.svelte'
    import ArticleList from './_components/ArticleList.svelte'
    import { metatags } from '@sveltech/routify'
    metatags.title = 'My Routify app'
    metatags.description = 'Description coming soon...'
</script>

<RoutifyIntro />
<ArticleList /> 