[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url]

# React-Up
This is a simple [Yeoman Generator](http://yeoman.io/) to help speed up the `stubbing` of a React `<Component />`. Each component is treated as an individual Module / Package with all files being co-located including optional tests.

### Installation
Install [Yeoman](http://yeoman.io) and this generator using [NPM](https://www.npmjs.com/). Assuming [NodeJS](https://nodejs.org/) is installed:

```
npm install -g yo
npm install -g generator-react-up
```

### Available Methods
Since Yeoman is kind enough to create a `generator-generator...` I've made this `generator` even more customizable for you. The goal of react-up was to reduce the boiler plate I had to write and it's worked incredibly well. While at **thredUP** I've managed to get other developers on board using it as well at which point quickly realized it needed a deeper level of customization.

There are now several smaller generators which rock.

#### 1. Setup / Customization

`yo react-up:setup`

Simply run the command above and follow the prompts:
1. Customizable templates
1. User / Organization Specific Information

#### 2. Default: Dumb Component

`yo react-up ComponentName`

Create a stateless component / pure function quickly using the command below, simply replace `ComponentName` for the name of your choice.

#### 3. Smart Component

`yo react-up:class ComponentName`

Create a smart component that contains all available life-cycle methods and link to the Facebook docs.


#### License
Apache-2.0 © [Matthew D. Shelley](http://www.visualmarvel.com)

[npm-image]: https://goo.gl/4WOLxL
[npm-url]: https://goo.gl/0pEQL6
[travis-image]: https://goo.gl/E49AER
[travis-url]: https://goo.gl/l9lbpx
[daviddm-image]: https://goo.gl/4kZ8N1
[daviddm-url]: https://goo.gl/AEw1JM
