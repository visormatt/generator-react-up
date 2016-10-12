<!--# generator-react-up [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url]-->

### Overview
This is a simple [Yeoman Generator](http://yeoman.io/) to help speed up the `stubbing` of a React Component. It supports the usage of [Radium](https://github.com/FormidableLabs/radium) for inline styles but default to [SCSS](http://sass-lang.com/). Each component is treated as an individual Module / Package.


### Installation

1. install [Yeoman](http://yeoman.io) and generator-react-up using [npm](https://www.npmjs.com/) (we assume you have [node.js](https://nodejs.org/) installed).

```
npm install -g yo
npm install -g generator-react-up
```

2. Then generate your first component from any folder.

```
yo react-up <COMPONENT_NAME>
```

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
