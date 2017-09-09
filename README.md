<!-- NPM Info -->
![NPM License           ](https://img.shields.io/npm/l/generator-react-up.svg?style=flat-square)
![NPM Version           ](https://img.shields.io/npm/v/generator-react-up.svg?style=flat-square)
![NPM Total Downloads   ](https://img.shields.io/npm/dt/generator-react-up.svg?style=flat-square)
![NPM Monthly Downloads ](https://img.shields.io/npm/dm/generator-react-up.svg?style=flat-square)
![Node Dependencies](https://img.shields.io/versioneye/d/visormatt/generator-react-up.svg)

<!-- Github Styled -->
<!-- ![Github Followers](https://img.shields.io/github/followers/visormatt.svg?style=social&label=Follow) -->
![Github Stars](https://img.shields.io/github/stars/visormatt/generator-react-up.svg?style=social&label=Stars)
![Github Forks](https://img.shields.io/github/forks/visormatt/generator-react-up.svg?style=social&label=Forks)
![GitHub watchers](https://img.shields.io/github/watchers/visormatt/generator-react-up.svg?style=social&label=Watchers)
![Github Issues](https://img.shields.io/github/issues/visormatt/generator-react-up.svg?style=social&label=Issues)

# React-Up
This is a simple [Yeoman Generator](http://yeoman.io/) to help speed up the `stubbing` of a React `<Component />`. Each component is treated as an individual Module / Package with all files being co-located including optional tests.

### Installation
Install [Yeoman](http://yeoman.io) and this generator using [NPM](https://www.npmjs.com/). Assuming [NodeJS](https://nodejs.org/) is installed:

```bash
# Install yeoman and the generator
npm install -g yo
npm install -g generator-react-up

# Run the initial setup (should be run from the project root)
yo react-up
```

### Default Methods:
Since Yeoman is kind enough to create a `generator-generator...` I've made this `generator` even more customizable for you.

The goal of `react-up` was to reduce the boiler plate required and improve consistency. So far, this generator has saved me a ton of time, enough so that I've decided to upgrade yet again.

This generator is now much more customizable. You can easily create mappings and exist the current templates to fit your particular needs.

```bash
# Pure function
yo react-up <ComponentName>

# React Component
yo react-up <ComponentName> class

# Test file
yo react-up <name> test

# Setup (can be run at anytime)
yo react-up:setup
```

### Customization:
To create or modify existing methods available, simply update the `mappings.js` within your local template folder.

#### License
Apache-2.0 © [Matthew D. Shelley](http://www.visualmarvel.com)

[npm-image]: https://goo.gl/4WOLxL
[npm-url]: https://goo.gl/0pEQL6
[travis-image]: https://goo.gl/E49AER
[travis-url]: https://goo.gl/l9lbpx
[daviddm-image]: https://goo.gl/4kZ8N1
[daviddm-url]: https://goo.gl/AEw1JM
