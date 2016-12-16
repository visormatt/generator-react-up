// Vendor
import chalk from 'chalk';
import path from 'path';
import yosay from 'yosay';

// Internal
import logger from '../common/logger';
import pathHelper from '../common/path';
import questions from './questions';
import ReactUp from '../ReactUp';

// Setup
const successMessage = (config) => (`
  Setup complete, get started using any of the generators below:

  ${ chalk.gray(' * yo react-up Name') }
  ${ chalk.gray(' * yo react-up Name class') }
  ${ chalk.gray(' * yo react-up example-test test') }

  Create your own templates or customize the defaults:

  ${ chalk.gray(` * ${ config.root }/${ config.templates }mappings.js`) }

  Or run setup again at any point using:

  ${ chalk.gray(' * yo react-up:setup') }
`);

/**
 * @class Setup
 * @description This class helps the user further customize the generator.
 */
class Setup extends ReactUp { // eslint-disable-line padded-blocks

  /**
   * @description A nicer way to get started
   */
  welcome() {
    const message = `Hello, and welcome to the ${ chalk.red('react-up') } generator!`;
    this.log(yosay(message));

    return this.prompt(questions.customize)
      .then((answer) => {
        this.stop = !answer.customize;
        if (this.stop) logger.skip('setup');
      })
      .catch(logger.error);
  }

  /**
   * @description This will set an domain / domain name which is used in the
   * `package.json` files as we create new Components
   */
  setDomain() {
    if (this.stop) return Promise.resolve();

    return this.prompt(questions.domain)
      .then((answer) => {
        this.config.set('domain', answer.domain);
        this.config.set('package', __dirname);
        this.config.set('root', process.cwd());
      })
      .catch(logger.error);
  }

  /**
   * @description Setting up relative paths allows the user to run any of the
   * generators from within any sub-folder. Setting this value to false, will
   * run all reducers relative to the project root where the users `.yo-rc.json`
   */
  setRelative() {
    if (this.stop) return Promise.resolve();

    return this.prompt(questions.relative)
      .then((answer) => {
        this.config.set('relative', answer.relative);
      })
      .catch(logger.error);
  }

  /**
   * @description Setting a custom template path will copy the defaults to
   * a template folder in the project root for further customization.
   */
  setTemplates() {
    if (this.stop) return Promise.resolve();

    return this.prompt(questions.template)
      .then((answer) => {
        const { templates } = answer;
        this.config.set('templates', templates);
        this._setupTemplatePath(templates); // eslint-disable-line no-underscore-dangle
      })
      .catch(logger.error);
  }

  complete() {
    if (this.stop) return;
    const config = this.config.getAll(); // get our new config
    this.log(successMessage(config));
  }

  /**
   * @description Anytime we run the setup we now use the Yeoman method
   * which protects us from overwritting any changes the user may have made
   * to their templates. Always grabbing the default templates which exist
   * inside of the NPM package
   */
  _setupTemplatePath(dest) {
    const templates = path.resolve(__dirname, '../../templates');

    pathHelper.create(dest)
      .then(() => {
        this.template(templates, dest);
      })
      .catch(logger.error);
  }
}

// Export our generator available via CLI: `yo react-up:setup`
module.exports = Setup;
