import Parser from 'rss-parser'
import Head from 'next/head'
import Image from 'next/image'
import Clock from '../components/Clock'
import Post from '../components/CompanyPost'
import SkyNews from '../components/skynews'
import Weather from '../components/Weather'
import YouTubePlayer from '../components/youtube'
import { ServerTalk } from '../components/ServerTalk'
import CompanyPost from '../components/CompanyPost'
import Marquee from 'react-fast-marquee'

export async function getStaticProps() {
  // RSS Feed - Sky News
  let parser = new Parser();
  const RSSfeed = await parser.parseURL('http://feeds.skynews.com/feeds/rss/uk.xml')

  // Weather
  let weatherUrl = 'http://api.weatherapi.com/v1/current.json?key=ac517e0edf3142a6ae282635211410&q=BN1&aqi=no';
  const weather = await (await fetch(weatherUrl)).json();

  // Company Posts
  const posts = await ServerTalk('/items/posts', process.env.BACKEND_USER_TOKEN)
  return {
    props: {
      RSSfeed,
      weather,
      posts
    },
  }
}

export default function IndexPage({ RSSfeed, weather, posts }) {

  return (
    <main>


      <Head>
        <title>Home page</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap" rel="stylesheet"></link>
      </Head>

      <div className=" static m-2 h-48 font-Ubuntu p-3">
          <div className=" absolute top-0 left-0 p-8">
            {/*
            Youtube Player
            */}
          <YouTubePlayer query="9Auq9mYxFEE" params="?autoplay=1&mute=1&cc_load_policy=1&disablekb=1&fs=0&modestBranding=1" />
        </div>


        <div className=" absolute top-0 right-0 p-16">
          <Image src="/shoreLogo.png" alt="Logo" width="540" height="246" />
          {posts.data.map((title) => (
            <CompanyPost {...title} {...title.body} id={title.id} />
          ))}

        </div>
        <div className="text-3xl absolute bottom-0 left-0 p-2">
          <Marquee gradientColor speed="75
          ">
            {RSSfeed.items.map((title, index) => (
              <SkyNews {...title} id={index} />
            ))}
          </Marquee>
        </div>
        <div className="flex flex-row absolute bottom-0 left-0 p-2">
          <Weather {...weather} />
          <div className="text-3xl p-5">
            <Clock />

          </div>

        </div>
      </div>

    </main>



  )
}






