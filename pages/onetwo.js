let Parser = require('rss-parser');
let parser = new Parser();
import Head from 'next/head';
import Image from 'next/image';
import Clock from '../components/Clock';
import Post from '../components/post';
import SkyNews from '../components/skynews';
import Weather from '../components/Weather';
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

// if (typeof window !== "undefined") {
//   (function () {

//     var clockElement = document.getElementById("clock");

//     function updateClock(clock) {
//       clock.innerHTML = new Date().toLocaleTimeString();
//     }

//     setInterval(function () {
//       updateClock(clockElement);
//     }, 1000);

//   }());
// }
export default function IndexPage({ RSSfeed, weather }) {
  return (
    <main>


      <Head>
        <title>Home page</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap" rel="stylesheet"></link>
      </Head>

      <div className="bg-gradient-to-r from-white via-white to-cyan-400 font-Ubuntu grid grid-cols-9 grid-rows-9 p-3">
        <div className="bg-blue 200 col-span-6 row-span-6 ">
          {/*
            Youtube Player
            */}
          <YouTubePlayer query="9Auq9mYxFEE" params="?autoplay=1&mute=1&cc_load_policy=1&disablekb=1&fs=0&modestBranding=1" />
        </div>

        <div className="  col-span-3 row-span-6 p-10">
          <Image src="/shore_logo_dark.png" alt="Logo" width="400" height="220" />
          <h1> [COMPANY NEWS AND ANNOUNCEMENTS HERE]</h1>
        </div>


        <div className=" col-span-6 row-span-3">
          {RSSfeed.items.map((title) => (
            <SkyNews {...title} id={title} />
          ))}

        </div>

        <Weather {...weather} />


        <div className="text-3xl bottom-0 right-0 col-span-1 row-span-3">
          <Clock />
        </div>

      </div>

    </main>

  )
}



