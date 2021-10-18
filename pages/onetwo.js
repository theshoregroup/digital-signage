let Parser = require('rss-parser');
let parser = new Parser();
import Head from 'next/head';
import Post from '../components/post';
import SkyNews from '../components/skynews';
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
      
        <div className="font-sans bg-gray-300 grid grid-cols 9 grid-rows-9 gap-12 p-6">
          <div className="bg-blue-200 col-span-6 row-span-6">
            {/*
            Youtube Player
            */}
            <YouTubePlayer query="9Auq9mYxFEE" params="?autoplay=1&mute=1&cc_load_policy=1&disablekb=1&fs=0&modestBranding=1" />
          </div>

    
          <div className="bg-red-400 col-span-3 row-span-3">
          {RSSfeed.items.map((title) => (
            <SkyNews {...title} id={title.id} />
          ))}
          </div>

          <div className="bg-blue-600 col-span-2 row-span-3">
            <h1 className="text-pink-100"> Weather </h1>
            {weather.location.name}
            {weather.current.condition.text} 
            {weather.current.temp_c}°C
          </div>
    
    
          <div className="bg-red-700 col-span-1 row-span-3">
          <span id="clock"></span>
          </div>
            
        </div>
        
          </main>
        
      
      
)
}

    

