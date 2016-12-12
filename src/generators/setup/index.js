// Vendor
import chalk from 'chalk';
import yosay from 'yosay';

// Internal
import logger from '../common/logger';
import pathHelper from '../common/path';
import questions from './questions';
import ReactUp from '../ReactUp';

/**
 * @class Setup
 * @description This class helps the user further customize the generator.
 */
class Setup extends ReactUp { // eslint-disable-line padded-blocks

  welcome() {
    const message = `Hello, and welcome to the ${ chalk.red('ReactUp') } generator!`;
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
        this.config.set('root', process.cwd());
        logger.success('- saving domain name:', answer.domain);
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
        const { path } = answer;
        this.config.set('templates', path);
        this._setupTemplatePath(path); // eslint-disable-line no-underscore-dangle
      })
      .catch(logger.error);
  }

  /**
   * @description Copy the generators default templates into a user defined
   * directory, which allows the user to further customize each
   */
  _setupTemplatePath(path) {
    const srcRoot = this.sourceRoot();

    pathHelper.create(path)
      .then(pathHelper.clean(path)
        .then(() => {
          pathHelper.copy(srcRoot, path);
          logger.success('- custom template path created:', path);
        }))
      .catch(logger.error);
  }
}

// Export our generator available via CLI: `yo react-up:setup`
module.exports = Setup;
