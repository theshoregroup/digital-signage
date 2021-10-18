import Head from 'next/head'

export default function IndexPage({ serverStatus }) {
  return (
    <main>
      <Head>
        <title>Home page</title>
      </Head>
      <div className="h-screen w-screen bg-blue-400 grid place-items-center">
        <h1 className="text-6xl text-center">The Shore Group - Screens App.</h1>
        <p>v0.1 - connection to CMS is: {serverStatus}</p>
      </div>
    </main>
  )
}

export async function getStaticProps() {
  // Fetch status from CMS
  const url = `${process.env.BACKEND_URL}/items/ping/?access_token=${process.env.BACKEND_USER_TOKEN}`
  console.log(`Sending ${process.env.BACKEND_URL} the message of 'items/ping' with the access token in ENV file`)
  const response = await fetch(url)

  const connectionJSON = await response.json()
  let serverStatus 

  try {
    if(connectionJSON.data.reply == 'pong') {
      serverStatus = `Healthy - server replied with '${connectionJSON.data.reply}'`
    }
  } catch (error) {
    serverStatus = `BROKEN. See logs. Reply: ${JSON.stringify(connectionJSON)}`
  }




  return { props: { serverStatus } }
}

