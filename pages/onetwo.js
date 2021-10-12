let Parser = require('rss-parser');
let parser = new Parser();
import Head from 'next/head';

import Post from '../components/post'

export async function getStaticProps() {
    // fetch list of posts
    const RSSfeed = await parser.parseURL('http://feeds.skynews.com/feeds/rss/uk.xml')
    
    return {
      props: {
        RSSfeed,
      },
    }
  }
  

  export default function IndexPage({ RSSfeed }) {
    return (
      <main>
        <Head>
          <title>Home page</title>
        </Head>
  
        <h1>List of posts</h1>
  
        <section>
          {RSSfeed.items.map((post) => (
            <Post {...post} key={post.id} />
          ))}
        </section>
      </main>
    )
  }
  