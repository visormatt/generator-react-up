## Development:
Yeoman expects our generator files to be located in a `generators/` directory so we compile all of our ES6 code down to ES5 and voila.

We also need to setup our `.gitignore` and `.npmignore` so we don't keep the wrong versions of the files in the incorrect place. We don't want to commit our compiled generators to our repo so we ignore the `generators` folder which is created by our `npm run build` and `npm run develop` scripts. On the NPM registry side of things, we only want to add the compiled versions so we ignore the `src` folder.

**Local Development:**
- Pull this repository locally
- CD into root directory
- `npm link`
- `npm run develop`

This will kick off an initial run of babel and watch for any file changes. Since we've run the `npm link` command any instances of the `react-up` will reference this directory vs. the installed version from `npm`.


**References:**
- [Yeoman creating a generators](http://yeoman.io/authoring/index.html)
- [Yeoman generators in ES6](http://alexfedoseev.com/post/67/yeoman-generator-es6)
- [Compile with Babel](http://jamesknelson.com/writing-npm-packages-with-es6-using-the-babel-6-cli/)

**Notes:**
- The `.prompts` method is powered by [Inquirer.js](https://github.com/SBoudrias/Inquirer.js).
