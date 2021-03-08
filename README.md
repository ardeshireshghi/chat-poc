## Chat POC: About the project

This repository holds a POC of a simple chat screen.

## Contents

- [Chat POC: About the project](#chat-poc--about-the-project)
  - [Built with](#built-with)
- [Getting Started](#getting-started)
  - [Available Scripts](#available-scripts)
    - [`yarn start`](#-yarn-start-)
    - [`yarn test`](#-yarn-test-)
    - [`yarn build`](#-yarn-build-)
  - [📁 Architecture](#---architecture)

### Built with

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). Other tools and libraries:

1. [Typescript](https://www.typescriptlang.org/) as the static type checker

2. [Styled components](https://styled-components.com/) which is a CSS in JS library

## Getting Started

### Available Scripts

In the project directory, you can run:

#### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

#### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### 📁 Architecture

The design of this POC loosely follows [onion architecture](https://www.codeguru.com/csharp/csharp/cs_misc/designtechniques/understanding-onion-architecture.html). I was looking at this recently and thought I can use this project to try it. Given the scope of the POC, I acknowledge that it is a bit of an overkill or rather over-engineering for what it's worth. I like to hear your feedback on this.

Following that architecture, the code consist of:

- `domain`: Which are the basic domain models as well as service and repository interfaces
- `services`: In the context of this codebase services are mainly used to interact with external systems (e.g. use repository to connect to a data source)
- `infrastructure` which implements interfaces which are responsible for data access such as repositories
- The rest of the code base are specific to the user interface and are related to React which is responsible for rendering the UI:
  - screens
  - components and theming
  - hooks and context
