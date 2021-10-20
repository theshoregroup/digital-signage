import Head from 'next/head'
import chalk from 'chalk'
import { ServerTalk } from '../components/servertalk'

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
  // Todo: Make all CMS communication a single function?

  // Try to get variables from ENV file
  // This could use try/catch, however trying to get that to find undefineds doesnt seem to be a great idea. Instead - while less elegant - this just uses an if statement. This HAS to have both the BACKEND_URL and BACKEND_USER_TOKEN come back as defined, so anything else will result in the else clause being called.
  // Now I can't (unfortunately) write to the variables - so this 
  console.info(
    chalk.green("✨ Testing Enviroment Variables:"),
    "This should display the Node Enviroment and the connection string of https://cms.theshoregroup.co.uk")
  if (process.env.BACKEND_URL !== undefined && process.env.BACKEND_USER_TOKEN !== undefined) {
    // From this point on, it is KNOWN that there are good values in the ENV file

    // To remove half of token from console
    
    const halfOfToken = (process.env.BACKEND_USER_TOKEN.length / 2)
    console.log(
      chalk.black.bgWhite.bold("✨ VARIABLES\n"),
      chalk.bold("* Node Enviroment:"), `${process.env.NODE_ENV} \n`,
      chalk.bold("* Connection String:"), `${process.env.BACKEND_URL} \n`,
      chalk.bold("* Assigned CMS User:"), `${process.env.BACKEND_USER} \n`,
      chalk.bold("* CMS User token:"), `${process.env.BACKEND_USER_TOKEN.slice(0, halfOfToken)}*******`, chalk.italic("- Redacted in console.")
      )
  } else { // It is known that at least one of the values is unavalaible
    // The app errors. In build this will stop the build.
    throw new Error(
      chalk.white.bgRed("🚨 WARNING 🚨"),
      chalk.red("BACKEND_USER or BACKEND_USER_TOKEN was unable to be defined from .env - this app requires these values. \n"),
      "Check your enviroment file is defined correctly and is available to your application."
      )
  }

  // We now have "good" variables - these have to be tested to make sure they are working properly. To do this, we are going to call the same endpoint twice to see if we get more information as an admin.

  // To start with, we are going to get the public /server/health value
  function testPublic(uri) {
    const returnFromServer = await ServerTalk(uri)

    if (returnFromServer.status == "ok") {
      return true
    } else {
      return false
    }
  }
  const publicValue = testPublic("/server/health")

  // Now we are going to perform the same test again, with authentication
  function testPrivate(uri, token) {
    const returnFromServer = await ServerTalk(uri, token)

    if (returnFromServer.status == "ok") {
      return true
    } else {
      return false
    }
  }
  const privateValue = testPrivate("/server/health", process.env.BACKEND_USER_TOKEN)
  

  // The idea of this would be to grab this info and get the admin version. Need to add a clause for if not authorised!

// OLD CODE.
  const url = `${process.env.BACKEND_URL}/items/ping/?access_token=${process.env.BACKEND_USER_TOKEN}`
  console.log(`Sending ${process.env.BACKEND_URL} the message of 'items/ping' with the access token in ENV file`)
  const response = await fetch(url)

  const connectionJSON = await response.json()
  let serverStatus 

  try {
    if(connectionJSON.data.reply == 'pong') {
      serverStatus = `Healthy - server replied with '${connectionJSON.data.reply}'`
    }
  } catch {
    serverStatus = `BROKEN. See logs. Reply: ${JSON.stringify(connectionJSON)}`
  }




  return { props: { serverStatus } }
}

