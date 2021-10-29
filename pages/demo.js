import Parser from 'rss-parser'
import Head from 'next/head'
import Clock from '../components/Clock'
import CompanyPost from '../components/CompanyPost'
import SkyNews from '../components/skynews'
import Weather from '../components/Weather'
import YouTubePlayer from '../components/youtube'
import { ServerTalk } from '../components/ServerTalk'

export async function getStaticProps() {

    const skyURL = await ServerTalk("/items/services", process.env.BACKEND_USER_TOKEN, "&filter[name][_eq]=sky-uk-rss")
    // RSS Feed - Sky News
    let parser = new Parser();
    const RSSfeed = await parser.parseURL(skyURL.data[0].query_or_uri)

    // Weather http://api.weatherapi.com/v1/current.json?key=ac517e0edf3142a6ae282635211410&q=BN1&aqi=no'
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
            </Head>

            <div>

                <h1>Demo Page</h1>

                <h2>Sky RSS feed</h2>
                {RSSfeed.items.map((title, index) => (
                    <SkyNews {...title} id={index} />
                ))}

                <h2>YouTube</h2>
                <YouTubePlayer query="9Auq9mYxFEE" params="?autoplay=1&mute=1&cc_load_policy=1&disablekb=1&fs=0&modestBranding=1" />

                <h2>Company posts</h2>
                {posts.data.map((title) => (
                    <CompanyPost {...title} {...title.body} id={title.id} />
                ))}

                <h2>Weather</h2>
                <Weather {...weather} />

                <h2>Clock</h2>
                <Clock />

            </div>

        </main>



    )
}






