<!--# generator-react-up [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url]-->

# Overview
This is a simple [Yeoman Generator](http://yeoman.io/) to help speed up the `stubbing` of a React Component. It supports the usage of [Radium](https://github.com/FormidableLabs/radium) for inline styles but default to [SCSS](http://sass-lang.com/). Each component is treated as an individual Module / Package.

## Installation
Install [Yeoman](http://yeoman.io) and this generator using [NPM](https://www.npmjs.com/). Assuming [NodeJS](https://nodejs.org/) is installed:

```
npm install -g yo
npm install -g generator-react-up
```

## Methods
Since Yeoman is kind enough to create a `generator-generator...` I've made this `generator` even more customizable for you. The goal of react-up was to reduce the boiler plate I had to write and it's worked incredibly well. While at **thredUP** I've managed to get other developers on board using it as well at which point quickly realized it needed a deeper level of customization.

There are now several smaller generators which rock.


>**Setup / Customization**

`yo react-up:setup`

Simply run and follow the prompts to enjoy:
1. Customizable templates
1. setup custom information


>**Default: Dumb Component**

`yo react-up ComponentName`
_~ or ~_
`yo react-up:pure ComponentName`

Create a smart component that contains all available life-cycle methods and link to the Facebook docs.

>**Smart Component**

`yo react-up:class ComponentName`

Create a stateless component / pure function quickly using the command below, simply replace `ComponentName` for the name of your choice.

----

### Todo:
- [ ] Implement a `.yo-rc.json` to define the root (this would be more opinionated though) so we can run from the project root and drop into the correct folder.
- [ ] Move generator code to ES6
- [ ] Update Generator tests


#### License

Apache-2.0 © [Matthew D. Shelley](https://www.visualmarvel.com)

[npm-image]: https://badge.fury.io/js/generator-react-up.svg
[npm-url]: https://npmjs.org/package/generator-react-up
[travis-image]: https://travis-ci.org/visormatt/generator-react-up.svg?branch=master
[travis-url]: https://travis-ci.org/visormatt/generator-react-up
[daviddm-image]: https://david-dm.org/visormatt/generator-react-up.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/visormatt/generator-react-up
