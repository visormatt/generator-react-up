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

  /**
   * @description This will set an domain / domain name which is used in the
   * `package.json` files as we create new Components
   */
  setDomain() {
    return this.prompt(questions.domain)
      .then((answer) => {
        this.config.set('domain', answer.domain);
        logger.success('- saving domain name:', answer.domain);
      })
      .catch(logger.error);
  }

  /**
   * @description Setting a custom template path will copy the defaults to
   * a template folder in the project root for further customization.
   */
  setTemplates() {
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

    pathHelper.create(path);
    pathHelper.clean(path);
    pathHelper.copy(srcRoot, path);

    logger.success('- custom template path created:', path);
  }
}

module.exports = Setup;
