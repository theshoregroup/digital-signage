let Parser = require('rss-parser');
let parser = new Parser();
import Head from 'next/head';
import YouTubePlayer from '../components/youtube';
const url = `https://api.openweathermap.org/data/2.5/weather?q=brighton,uk&appid=8b609354454cdb6c5a7092a939861ace&units=metric`;

export async function getStaticProps() {
    // fetch list of posts
    const RSSfeed = await parser.parseURL('http://feeds.skynews.com/feeds/rss/uk.xml')
    let url = 'http://api.weatherapi.com/v1/current.json?key=ac517e0edf3142a6ae282635211410&q=BN1&aqi=no';
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
          {/*
          Youtube Player
          */}
          <YouTubePlayer query="9Auq9mYxFEE" params="?autoplay=1&mute=1&cc_load_policy=1&disablekb=1&fs=0&modestBranding=1" />
        </section>
  
        <h1>List of posts</h1>
        <section>
          {RSSfeed.description}
          {RSSfeed.title}
        </section>
  
        <section>
          <div className="container">
            <h1 className="heading"> Weather </h1>
          {weather.location.name}
          {weather.current.condition.text}
          {weather.current.temp_c}°C
   
  
          </div>
        </section>

        <section>
        <span id="clock"></span>
        </section>
      </main>
)
}

    

