import Head from 'next/head'
import chalk from 'chalk'
import { ServerTalk } from '../components/servertalk'
import fs from 'fs'

export default function IndexPage({ serverStatus }) {
  return (
    <main>
      <Head>
        <title>Home page</title>
      </Head>
      <div className="h-screen w-screen bg-blue-400 grid place-items-center">
        <h1 className="text-6xl text-center">The Shore Group - Screens App.</h1>
        <div>
          <p>
            Version: 0.1
          </p>
          <p>
            Authentication Status: {serverStatus.authentication}
          </p>
          <p>
            Directus Release: {serverStatus.additionalInfo.release}
          </p>
          <p>
            Database Response Times: {serverStatus.additionalInfo.dbResponseTime}
          </p>
          <p>
            Connection to email: {serverStatus.additionalInfo.email}
          </p>
        </div>
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
      chalk.bold("* CMS User token:"), `${process.env.BACKEND_USER_TOKEN.slice(0, halfOfToken)}*******`, chalk.italic("- partially redacted in console.")
    )
  } else { // It is known that at least one of the values is unavalaible
    // This will write the contents of .env.sample to .env and then error - stopping the server/build.

    console.warn(
      chalk.white.bgRed("🚨 ERROR 🚨"),
      chalk.red("Unable to define required tokens from your enviroment file")
    )
    // Checks to see if an enviroment file already exists
    if (fs.existsSync("./.env")) {
      // path exists
      throw Error(
        chalk.white.bgRed("🚨 FATAL ERROR - APP WILL NOW EXIT 🚨"),
        chalk.red("BACKEND_USER or BACKEND_USER_TOKEN was unable to be defined from .env - this app requires these values. \n"),
        "You already have an enviroment file, check to see if the values have been added correctly. To see more information, see the GitHub repo: https://github.com/theshoregroup/screens-frontend. \n",
        "Also note: There is a sample enviroment file included in the root of this project at", chalk.italic("./.env.sample")
      )
    } else {
      // Attempt to write .env with the contents from .env.sample
      const writeEnv = await fs.copyFile('.env.sample', '.env', (err) => {
        if (err) throw new err("TEST");
        console.log(chalk.white.bgRed("🚨 FATAL ERROR - APP WILL NOW EXIT 🚨"),
          chalk.red("Your enviroment file could not be read from disk."),
          "env.sample has now been written to .env -", chalk.red.bold("YOU MUST NOW OVERRIDE BACKEND_USER AND BACKEND_USER_TOKEN OR THIS APP WILL STILL FAIL.")
        )
      })
    }




  }

  // We now have "good" variables - these have to be tested to make sure they are working properly. To do this, we are going to call the same endpoint twice to see if we get more information as an admin.

  async function testServerAccess() {


    const returnFromServer = await ServerTalk("/server/health", process.env.BACKEND_USER_TOKEN)


    if (returnFromServer.status == "ok") {
      // This means that the server is not only responding, but the server accepted the login token.
      return {
        "authentication": returnFromServer.status,
        "additionalInfo": {
          "release": returnFromServer.releaseId,
          "dbResponseTime": returnFromServer.checks[`${process.env.BACKEND_DATABASE_TYPE}:responseTime`][0].status,
          "email": returnFromServer.checks["email:connection"][0].status
        }
      }
    } else if (returnFromServer.errors[0].extensions.code == "INVALID_CREDENTIALS") {
      return "Unauthenticated"
    }

  }

  const serverStatus = await testServerAccess()

  return { props: { serverStatus } }
}

