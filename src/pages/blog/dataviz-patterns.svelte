<script>
    import Header from '../_components/Header.svelte'
    import Footer from '../_components/Footer.svelte'
    import ArticleContainer from './_components/ArticleContainer.svelte'
    import { darkMode } from '../../stores.js'
    import { articles } from '../../stores.js'
    import { Highlight } from 'svelte-highlight'
    import { javascript } from 'svelte-highlight/languages'
    import { anOldHope } from 'svelte-highlight/styles'
    import { Map } from '@beyonk/svelte-mapbox'
    import Scroller from '@sveltejs/svelte-scroller'

    let article = $articles[1];

    let index, offset, progress;

    $: code = `const add = (a: number, b: number) => a + b;

    console.log('hello world');`
</script>

<svelte:head>
    <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/prism/1.17.1/themes/prism-okaidia.min.css'>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.21.0/plugins/normalize-whitespace/prism-normalize-whitespace.min.js" integrity="sha512-VTY+zyTivsIMZ+ANMHvwsnz0hIRHyu/I+7vLqaGaQs//PnQEuNyrLsCwNYo64H92vHojvj2Oiq7bfli0fTSDkQ==" crossorigin="anonymous"></script>
    {@html anOldHope}
</svelte:head>

<main>
    <Header />
    <ArticleContainer>
        <div class='article'>
            <div class='article-header'>
                <h1 class='title'>{article.title}</h1>
                <p class='subtitle'>{article.subtitle}</p>
            </div>
            <h2>Desisions</h2>
            <p>One of the main reasons I switched from writing through Blogdown or Distill through R was I felt too limited by the existing styles and themes. I'm sure I could have accomplished what I wanted eventually, but it felt like I had to fight against what was already there and wasn't learning as much as if I started from scratch.</p>
            <p>There are some tradeoffs between data visualization in R and JS that I had to learn through trial and error:</p>
            <p>R advantages:</p>
            <ul>
                <li>Unparalleled data analysis environment</li>
                <li>Simple chart-making through ggplot</li>
                <li>Statistical/ML packages usually have their own functions for visualizing models</li>
                <li>If you are comfortable with default themes and styles, you only need to worry about the data and its analysis</li>
            </ul>
            <p>JS advantages:</p>
            <ul>
                <li>Full control over structure & styles with a better development experience for both (no re-knitting docs to see changes on the webpage)</li>
                <li>Libraries for interactive web visualizations (Plot.ly, Mapbox, D3, Deck.gl, etc.)</li>
                <ul>
                    <li>Some of these are ported to R but generally give you less control over the API and tend to lag behind the JS version</li>
                </ul>
            </ul>
            <p>This is not an exhaustive comparison and I plan to write in more depth about it soon, this is just to give some context on the tools available for the job.</p>
            <h2>Let's see some viz</h2>
            <h3>Read in your data</h3>
            <Highlight language={javascript} {code} />
            <h3>Build a basic chart</h3>
            <h3>What about Mapbox maps?</h3>
            <Scroller top={0} bottom={0.5} bind:index bind:offset bind:progress>
                <div slot='background'>
                    {#if $darkMode}
                        <Map 
                            accessToken=MAPBOX_API_KEY
                            style='mapbox://styles/mapbox/dark-v10'
                            options={{ zoom: 11, center: [-75.1902, 39.9523], interactive: false }} 
                        >
                        </Map>
                    {:else}
                        <Map 
                            accessToken=MAPBOX_API_KEY
                            style='mapbox://styles/mapbox/light-v10'
                            options={{ zoom: 11, center: [-75.1902, 39.9523], interactive: false }} 
                        >
                    </Map>
                    {/if}
                </div>
                <div class='scroll-foreground' slot='foreground'>
                    <section>Maps look good and can be customized based on whether the reader is using light or dark mode.</section>
                    <section>I can also use the map as a background in a scrollytelling document as is seen in many professional data journalism publications.</section>
                    <section>This means I can use transitions to add to the narration of the story. Let's do an example and narrate me moving from Baltimore to Philly.</section>
                </div>
            </Scroller>
            <br style='margin-bottom:800px'/>
        </div>
    </ArticleContainer>
    <Footer />
</main>