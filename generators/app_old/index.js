'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

var beautify = require('gulp-beautify');

module.exports = yeoman.Base.extend({

  prompting: function () {
    // http://yeoman.io/authoring/file-system.html
    this.registerTransformStream(
      beautify({
        indentSize: 2
      })
    );

    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the doozie ' + chalk.red('generator-react-up') + ' generator!'
    ));

    var prompts = [{
      type: 'confirm',
      name: 'someAnswer',
      message: 'Would you like to enable this option?',
      default: true
    }];

    return this.prompt(prompts).then(function (props) {
      // To access props later use this.props.someAnswer;
      this.props = props;
    }.bind(this));
  },

  writing: function () {
    console.log('01. Creating stubs: ');

    this.fs.copy(
      this.templatePath('package.json'),
      this.destinationPath('package.json')
    );
  },

  install: function () {
    console.log('00. installing dependencies');
    // const required = ['gulp-beautify'];
    // let packageId = 0;
    //
    // required.map(requiredPackage => {
    //   packageId++;
    //   console.log(`${packageId}. ${requiredPackage}`);
    //   return this.npmInstall([requiredPackage], {saveDev: true});
    // });

    this.installDependencies();
  }
});
