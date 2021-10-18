import Head from 'next/head'
import chalk from 'chalk'

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
  // This could use try/catch, however trying to get that to find undefineds doesnt seem to be a great idea. Instead - while less elegant - this just uses an if statement. This HAS to have both the BACKEND_URL and BACKEND_USER_TOKEN come back as defined, so anythung else will result in the else clause, which will write defaults to these variables
  console.info("✨ Testing Enviroment Variables\n   This should display the Node Enviroment and the connection string of https://cms.theshoregroup.co.uk")
  
  if (process.env.BACKEND_URL !== undefined && process.env.BACKEND_USER_TOKEN !== undefined) {
    // There is a value inside BACKEND_URL!
    console.log(
      chalk.black.bgWhite.bold("✨ VARIABLES\n"),
      chalk.bold("* Node Enviroment:"), `${process.env.NODE_ENV} \n`,
      chalk.bold("* Connection String:"), `${process.env.BACKEND_URL} \n`,
      chalk.bold("* Assigned CMS User:"), `${process.env.BACKEND_USER} \n`,
      chalk.bold("* CMS User token:"), `${process.env.BACKEND_USER_TOKEN.substr(0, )}`
      )
  } else {
    console.error("")
  }
  
  try {
    const nodeENV = process.env.NODE_ENV
    const connString = process.env.BACKEND_URL
    console.info(`✨ VARIABLES\n * Node Enviroment: ${nodeENV}\n * Connection String: ${connString}`)
  } catch (error) {
    console.error(chalk.white.bgRed.bold(`WARNING!`), chalk.red(`The ENV file is MISSING! The CMS connection will fail!`))
    console.log(`Using default values, no authentication.\nThe /items/ping endpoint`, chalk.bold(`REQUIRES`) `the "Screens" user permission.`)
  }


  const url = `${process.env.BACKEND_URL}items/ping/?access_token=${process.env.BACKEND_USER_TOKEN}`
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

