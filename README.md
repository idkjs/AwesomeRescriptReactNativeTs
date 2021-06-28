# AwesomeRescriptReactNativeTs

# `@rescript-react-native/template`

[![Version](https://img.shields.io/npm/v/@rescript-react-native/template.svg)](https://www.npmjs.com/@rescript-react-native/template)
[![ReScript Forum](https://img.shields.io/discourse/posts?color=e6484f&label=ReScript%20Forum&server=https%3A%2F%2Fforum.rescript-lang.org)](https://forum.rescript-lang.org/)

> React Native template for application developed with ReScript.

Please carefully read instructions below in order to enjoy Rescript development
experience.

## Setup

## Start a ReScript React Native project with this template

```console
npx @react-native-community/cli init MyApp --template @rescript-react-native/template
cd MyApp
```

Now that you are ready to go, you can check our documentation on
[how to use ReScript React Native](https://rescript-react-native.github.io/docs/).


## Scratch

```sh
npx react-native init AwesomeRescriptProject --template react-native-template-typescript
cd AwesomeRescriptProject

// add rescript deps
yarn add bs-platform --dev
yarn add @rescript/react rescript-react-native gentype
```

- add `bsconfig.json`

```json
{
  "name": "my-rescript-react-native-app",
  "reason": { "react-jsx": 3 },
  "package-specs": {
    "module": "es6",
    "in-source": true
  },
  "suffix": ".bs.js",
  "sources": [
    {
      "dir": "src",
      "subdirs": true
    }
  ],
  "gentypeconfig": {
    "language": "typescript",
    "module": "es6",
    "importPath": "relative",
    "shims": {
      "ReasonReact": "React",
      "ReactNative": "ReactNative",
      "ApolloClient": "ApolloClient"
    },
    "debug": {
      "all": false,
      "basic": false
    }
  },
  "bs-dependencies": ["@rescript/react", "rescript-react-native"]
}
```

Test it with `yarn ios`
