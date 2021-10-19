import chalk from 'chalk'

export async function ServerTalk(uri, token, args) {
    // Stick URL together - we must have a URL & URI at this stage, so they get added
    let url = `${process.env.BACKEND_URL}${uri}`

    // If there is a token, add that
    if (token !== undefined && token !== null) {
      url = url + `?access_token=${token}`
    }

    // If there are additional arguments, add them
    // TODO: make this a full set of features able to be passed through?
    if (args !== undefined && args !== null) {
      url = url + args
    }

    // Log that connection is being made.
    console.log(
      chalk.black.bgWhite.bold("⚡️ Server Connection ⚡️"),
      `Attempting to connect to ${url}`
    )

    try {
      const rawReply = await fetch(url)
      const reply = await rawReply.json()
      console.log(
        chalk.white.bgGreen.bold("✨ Success! ✨"),
        "App made a successfull connection to the CMS."
      )
      return reply
    } catch {
      console.error(
        chalk.white.bgRed("🚨 ERROR 🚨"),
        chalk.red(`${process.env.npm_package_name} tried to talk to ${url}, but did not recive anything.`),
        "Check your enviroment file and API are defined correctly and is available to your application."
        )
        const reply = null
        return reply
    }
  }