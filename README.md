# Hardreset Description Generator

![Logo](/logo.ico)

Application made for easily generating YouTube videos description for our YouTube channel.

Stack:

- JavaScript,
- Node,
- Electron,
- CSS,
- Clojure,
- ClojureScript,
- MySQL

Directories explained:

- _src_ - Entry file, configuration file and a preload file, which exposes some functionality to the client
- _application_ - Front-End of the application, css, js and compiled ClojureScript _release_ folder
- _gen_ - ClojureScript project, which handles the transformation of data in the app

## Run the application:<br>

```
$ npm start
```

The application should start
<br><br>

## Build Application:

```
$ npm run dist
```

Application will be built into an executable available in the _dist_ directory
<br><br>

## Compile ClojureScript:

```
$ cd gen
$ scripts/release
```

After making some changes to the ClojureScript project, simply use the release script in the _gen/scripts_ directory in order to compile ClojureScript to JavaScript.

# Changing the Front-End

In order to change the front-end, simply edit files in the _application_ directory and re-run the program

# How it works:

- Client chooses which type of video they want to generate descriptions for
- Client enters devices' data
- Application pulls data from the database
- Gives this data to the ClojueScript compiled code
- ClojureScript outputs generated description string which is saved to the chosen directory
