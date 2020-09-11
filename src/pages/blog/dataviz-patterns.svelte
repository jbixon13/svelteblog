<script>
    import Header from '../_components/Header.svelte'
    import Footer from '../_components/Footer.svelte'
    import ArticleContainer from './_components/ArticleContainer.svelte'
    import { articles } from '../../stores.js'
    import { Highlight } from 'svelte-highlight'
    import { javascript } from 'svelte-highlight/languages'
    import { anOldHope } from 'svelte-highlight/styles'
    import { Map, Geocoder, Marker, controls } from '@beyonk/svelte-mapbox'


    let article = $articles[1];

    $: code = `const add = (a: number, b: number) => a + b;

    console.log('hello world');`

    const { GeolocateControl, NavigationControl, ScaleControl } = controls
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
            <!-- <Map accessToken={hello}>

            </Map> -->
            <h3>Deck.gl?</h3>
        </div>
    </ArticleContainer>
    <Footer />
</main>