'use strict';

// Vendor
var _ = require('lodash');
var chalk = require('chalk');
var fse = require('fs-extra');
var path = require('path');
var yeoman = require('yeoman-generator');

// Internal
var {date} = require('../../common/helper');

module.exports = yeoman.Base.extend({

  /**
   * NOTE: Some generator methods can only be called inside the constructor function.
   * These special methods may do things like set up important state controls and may
   * not function outside of the constructor. To override the generator constructor,
   * you pass a constructor function to extend() like so:
   */
  constructor: function () {
    // ensures our generator is correctly set up
    yeoman.Base.apply(this, arguments);

    // Update our folder path
    // this.sourceRoot('templates');
  },

  prompting: function () {
    var prompts = [{
      type: 'confirm',
      name: 'customize',
      message: 'Would you like to ' + chalk.cyan('customize') + ' the generator?',
      default: true
    }];

    // Now we ahve our answers, set our data
    return this.prompt(prompts)
      .then(function (props) {
        this.props = props;

        if (props.customize) {
          this._setup();
        } else {
          this.log(chalk.yellow('Continue on young Jedi'));
        }
      }.bind(this)
    );
  },

  /**
   * Now we actually copy and create
   */
  _setup: function () {
    var prompts = [{
      default: true,
      message: 'Would you like customize the ' + chalk.cyan('author') + '?',
      name: 'author',
      type: 'confirm'
    }, {
      default: true,
      message: 'Would you like to use ' + chalk.cyan('custom templates') + '?',
      name: 'templates',
      type: 'confirm'
    }];

    // Now we ahve our answers, set our data
    return this.prompt(prompts)
      .then(function (props) {
        this._flow(props);
      }.bind(this)
    );
  },

  // Just used so we can further parse out user input
  _flow: function(props) {
    return this._author(props)
      .then(
        this._templates.bind(this, props)
      )
      .then(
        this._complete.bind(this)
      );
  },

  _complete: function() {
    this.log('All done setting things up. You can re-run this at anytime');

    /**
     * Also note that the save method is called automatically each time you set
     * a configuration option. So you usually won't need to call it explicitly.
     */
    // this.config.save();
  },

  _author: function(props) {
    if (!props.author) {
      this.log(chalk.yellow('Skipping custom author.'));
      return Promise.resolve();
    }

    var prompts = [{
      message: 'Enter a name (used in package.json)',
      name: 'authorName',
      store: true,
      type: 'input'
    }];

    // Now we have our answers / props, set our data
    return this.prompt(prompts)
      .then(function (props) {
        this.data = props; // Store this

        if (props.authorName) {
          this.log('Setting author: ' + chalk.green(props.authorName));
          this.config.set('author', props.authorName || this.appname)
        } else {
          this.log(chalk.yellow('Skipping author setup'));
        }
      }.bind(this)
    );
  },

  _templates: function(props) {
    if (!props.templates) {
      this.log(chalk.yellow('Skipping custom templates.'));
      return Promise.resolve();
    }

    var prompts = [{
      message: 'Template folder location (should be relative to project root)',
      name: 'templatePath',
      store: true,
      type: 'input'
    }];

    // Now we have our answers / props, set our data
    return this.prompt(prompts)
      .then(function (props) {
        if (props.templatePath) {
          this.log('Setting template path: ' + chalk.green(props.templatePath));
          this.config.set('templates', props.templatePath);
          this._cleanTemplatePath();
        } else {
          this.log('Using default path: ' + chalk.yellow(this.appname));
        }
      }.bind(this)
    );
  },

  _cleanTemplatePath: function() {
    var folder = this.config.get('templates');

    // Now we create the folder
    fse.ensureDir(folder, function(err) {
      if (err) return console.error('We were unable to create the template folder', err);
    });

    // Save this
    this.folder = folder;

    // Empty it out
    fse.emptyDir(folder, function(err) {
      if (err) console.error('Unable to empty the template folder', err);
      if (!err) {
        this._copyTemplates(folder);
      }
    }.bind(this));
  },

  /**
   * Now we take the templates folder from the repo and copy it to the
   * folder the user sets in their application.
   */
  _copyTemplates: function() {
    const src = path.resolve(this.sourceRoot(), '../../../templates');

    fse.copy(src, this.folder, function(err) {
      if (err) return console.error(err);
      if (!err) console.log(chalk.green('Templates created'));
    }.bind(this));
  }
});
