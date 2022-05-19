# Create the app

This step is purely informative as it as already be done for you. However we recommend you to read it through to learn how to create a React app from scratch.

## create-react-app

The workshop uses the `create-react-app` command to create React apps (captain obvious here). `create-react-app` is an officially supported way to create single-page React applications. It offers a modern build setup with no configuration.

### Installation

Now you don't need to install create-react-app locally. The recommended way is to use npx which will use the last version without installing it.

### Create an app

To create an app with `create-react-app`, just run the following command

```sh
npx create-react-app my-app
cd my-app
```

### Run the app

to run the app just run the following command

```sh
yarn start
```

<img src='https://camo.githubusercontent.com/506a5a0a33aebed2bf0d24d3999af7f582b31808/687474703a2f2f692e696d6775722e636f6d2f616d794e66434e2e706e67' width='600' alt='npm start'>

and open your browser at [http://localhost:3000](http://localhost:3000)

The page will reload if you make edits in your source files.
You will see the build errors and lint warnings in the console.

<img src='https://camo.githubusercontent.com/41678b3254cf583d3186c365528553c7ada53c6e/687474703a2f2f692e696d6775722e636f6d2f466e4c566677362e706e67' width='600' alt='Build errors'>

and in the browser

<img src='https://github.com/react-bootcamp/react-101/raw/master/instructions/img/error.png' width='600' alt='First run'>

### Test the app

to test your app, just run

```sh
yarn test
```

### Build a production version of the app

The `yarn start` command will launch a development server with a development version of your app with some warnings, some typechecking, etc ... but all those check are not wanted in production. To create a production version of your app, just run

```sh
yarn build
```

This will create a `build` directory that will contain everything needed to deploy your app.

## The file structure of the react-101 project

To get started, first clone the project by running the following command

```sh
git clone https://github.com/react-bootcamp/react-101.git react-101
```

or perform the previous commands.

once cloned, you should have a file structure like the following

```sh
react-101/
  readme.md      
  node_modules/  # the dependencies of the app
    **
  package.json   # the project descriptor of the app
  yarn.lock      # the project dependencies descriptor for yarn users
  .gitignore      
  instructions/  # the workshop instruction
    **
  public/        # all the public resources of  your app
    css/
      **         # static css files
    fonts/
      **         # font files
    js/
      **         # third party libs
    favicon.ico  # the app favicon
    index.html   # the main html file of the app
  src/
    components/  # a director to put all your components
      index.js   # the index of the components module to faciliate imports
      Loader.js  # a sample component
    App.css      # the css for the App.js components
    App.js       # the main app
    index.css    # the css for the app env.
    index.js     # the entry point of the app
    logo.svg     # the app logo
```

go inside the `react-101` directory and run the following command

```sh
yarn start
```

then open your browser at [http://localhost:3000](http://localhost:3000)

<img src='https://github.com/react-bootcamp/react-101/raw/master/instructions/img/run.png' width='600' alt='First run'>

## react-101 dependencies

if you look at the `package.json` file you can see something like that

```json
{
  "name": "react-101",       // the name of your project
  "version": "2.0.0",        // its version using semver
  "private": true,           // yes its a private project
  "devDependencies": {       // all the tools to build and run your project
    // ...
  },
  "dependencies": {          // all the libs used at runtime by your application
    // ...
  },
  "scripts": {               // a bunch a scripts to run your app, build it and test it
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject" // a very interesting feature to remove react-script and evolve your project as you want
  }
}
```

# What's next

Now you're ready to write your first React component. Go to the [next step](./1-your-first-component.md) to learn how to do that.
