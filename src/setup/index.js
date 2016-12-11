// Vendor
import { Base } from 'yeoman-generator';

// Internal
import logger from '../common/logger';
import pathHelper from '../common/path';
import questions from './questions';

/**
 * @class Setup
 * @description This class helps the user further customize the generator.
 */
class Setup extends Base { // eslint-disable-line padded-blocks

  /**
   * @description Anytime we extend a Class as done above, we need to call super
   * to ensure the original Class is initialized. From there we save some basic
   * data and let the generator do it's thing.
   */
  constructor(args, options) {
    super(args, options);

    // We'll use this for more data as well later on
    this.data = {
      config: this.config.getAll()
    };
  }

  /**
   * @description This will set an author / domain name which is used in the
   * `package.json` files as we create new Components
   */
  setAuthor() {
    return this.prompt(questions.author)
      .then(answer => {
        this.config.set('author', answer.author);
        logger.success('- saving author name:', answer.author);
      })
      .catch(logger.error);
  }

  /**
   * @description Setting a custom template path will copy the defaults to
   * a template folder in the project root for further customization.
   */
  setTemplates() {
    return this.prompt(questions.template)
      .then(answer => {
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
