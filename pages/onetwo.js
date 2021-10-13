let Parser = require('rss-parser');
let parser = new Parser();
import Head from 'next/head';
const url = `https://api.openweathermap.org/data/2.5/weather?q=brighton,uk&appid=8b609354454cdb6c5a7092a939861ace&units=metric`;


export async function getStaticProps() {
    // fetch list of posts
    const RSSfeed = await parser.parseURL('http://feeds.skynews.com/feeds/rss/uk.xml')
    let url = 'https://api.openweathermap.org/data/2.5/weather?q=brighton,uk&appid=8b609354454cdb6c5a7092a939861ace&units=metric';
    const weather = await (await fetch(url)).json();

    return {
      props: {
        RSSfeed,
        weather,
      },
    }
  }

  if (typeof window !== "undefined") {
  (function () {

    var clockElement = document.getElementById( "clock" );
  
    function updateClock ( clock ) {
      clock.innerHTML = new Date().toLocaleTimeString();
    }
  
    setInterval(function () {
        updateClock( clockElement );
    }, 1000);
  
  }());
  }
  
  export default function IndexPage({ RSSfeed, weather, time }) {
    return (
      <main>
        <Head>
          <title>Home page</title>
        </Head>
        <section>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/9Auq9mYxFEE?cc_load_policy=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </section>
  
        <h1>List of posts</h1>
        <section>
          {RSSfeed.description}
          {RSSfeed.title}
        </section>
  
        <section>
          <div class="container">
            <h1 class="heading"> Weather </h1>
            {weather.weather.description}
          {weather.weather.main}
          {weather.main.feels_like}C
          {weather.name}
  
          </div>
        </section>

        <section>
        <span id="clock"></span>
        </section>
      </main>
)
}

    

