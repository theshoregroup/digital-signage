# Digital Signage
> This project is currently in pre-release state.

> **Note**: This project will probably change names before release `1.0` as I refuse to make something with a name as generic as _digital-signage_

Welcome to The Shore Group's open source digital signage client! This is a powerful, extensible project, written in TypeScript. It wraps a React app with an electron-builder wrapper for some system level intergration not possible with a PWA. It comes with automatic deployment via GitHub releases for Windows, Linux & macOS.

## Development
This project was bootstrapped with [create-react-app](https://github.com/facebook/create-react-app) roughly following [this guide](https://medium.com/@devesu/how-to-build-a-react-based-electron-app-d0f27413f17f), as well as the offical [TailwindCSS guide for create-react-app](https://tailwindcss.com/docs/guides/create-react-app) and a fully public template of the base of this project is available [here](https://github.com/theshoregroup/electron-react-tailwind-starter)

> This project uses Yarn (v1) - for a number of reasons. NPM, NPX _should_ work, but are not supported. You will need to install yarn globally with npm with `npm install -g yarn`

You can clone this repository with `git clone https://github.com/theshoregroup/digital-signage`

Once on your local machine, you will need to run `yarn` in the project's root directory to grab all the applicable node_modules.

### Scripts
`start:react` - starts the react development server on port 3000\
`start` - starts the full project in development mode\
`build:react` - builds the react part of the project to `/build/`\
`build:electron` - builds the electron part of the project\
`build` - builds the full project\
`release` - builds and packages the full project (by default on the platform you run the command on)\
`test:react` - runs the intergrated `react-scripts` tests\
`eject:react` - **ADVANCED** Runs the `react-scripts eject` command. This is irreversible - **MAKE SURE YOU KNOW WHAT YOU ARE DOING!**

Essentially:
- If you are running this in development mode, either to test or develop on, run `yarn start`
- If you are packaging this - please read the section on packaging below - however for testing a packaged version, run `yarn release`