let Parser = require('rss-parser');
let parser = new Parser();
import Head from 'next/head';
import Image from 'next/image';
import Clock from '../components/Clock';
import Post from '../components/post';
import SkyNews from '../components/skynews';
import Weather from '../components/Weather';
import YouTubePlayer from '../components/youtube';
import React from "react";

import Marquee from "react-fast-marquee";
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

export default function IndexPage({ RSSfeed, weather }) {
  return (
    <main>


      <Head>
        <title>Home page</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap" rel="stylesheet"></link>
      </Head>

      <div className="static m-2 h-48 font-Ubuntu p-3">
          <div className="absolute top-0 left-0 p-3">
            {/*
            Youtube Player
            */}
          <YouTubePlayer query="9Auq9mYxFEE" params="?autoplay=1&mute=1&cc_load_policy=1&disablekb=1&fs=0&modestBranding=1" />
        </div>



          <div className="absolute top-0 right-0 p-12">
            <Image src="/shoreLogo.png" alt="Logo" width="540" height="246"/>
            <h1> [COMPANY NEWS AND ANNOUNCEMENTS HERE]</h1>
        
       
          </div>

    
          <div className="flex flex-row absolute bottom-0 left-0 p-3">
            <div className="">
              {RSSfeed.items.map((title) => (
<<<<<<< Updated upstream
                <Marquee gradientColor speed="35" gradient="false" > <SkyNews {...title} id={title} /></Marquee>
=======
                <Marquee gradientColor="Red" speed="35" gradient="false" > <SkyNews {...title} id={title} /></Marquee>
>>>>>>> Stashed changes
              ))}
            </div>
           <h1 className="text-xl"> Weather </h1>
            {weather.location.name}
            {weather.current.condition.text} 
            {weather.current.temp_c}°C
<<<<<<< Updated upstream
            <div className="text-3xl absolute top-0 right-0 p-3">
=======
            <div className="text-3xl absolute bottom-0 right-0 p-3">
>>>>>>> Stashed changes
          <span id="clock"></span>
          
          </div>
    
          </div>
    
        
            
        </div>
        
          </main>
        
      
      
)
}






