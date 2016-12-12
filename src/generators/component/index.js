// Internal
import logger from '../common/logger';
import questions from './questions';
import ReactUp from '../ReactUp';

/**
 * @class Component
 * @description Used to generate a variety of React Components
 *
 * This includes:
 *   - pure: stateless / pure functions
 *   - class: smart / stateful
 *   - connected: Redux connected w/ state
 */
class Component extends ReactUp { // eslint-disable-line padded-blocks

  /**
   * @description This will set an author / domain name which is used in the
   * `package.json` files as we create new Components
   */
  prompts() {
    const data = this.data;
    const prompts = questions(data);

    return this.prompt(prompts)
      .then((answers) => {
        if (!answers.create) {
          logger.skip(data.tag);
        } else {
          this._create(answers); // eslint-disable-line no-underscore-dangle
        }
      })
      .catch(logger.error);
  }

  _create(config) {
    const data = this.data;
    const { current, name, type } = data;
    const componentSrc = type ? `component/${ type }.js` : 'component/class.js';

    this.sourceRoot(this.config.templates);

    this.template(componentSrc, `${ current }/${ name }/${ name }.js`, data);
    this.template('common/package.json', `${ current }/${ name }/package.json`, data);
    this.template('common/styles.scss', `${ current }/${ name }/styles.scss`, data);

    if (config.tests) {
      this._tests(data); // eslint-disable-line no-underscore-dangle
    }
  }

  _tests(data) {
    const { current, name } = data;
    const testFile = `${ current }/${ name }/_test/${ name }.test.js`;
    this.template('_test/index.js', testFile, data);
  }
}

// Export our generator available via CLI: `yo react-up:component CustomName`
module.exports = Component;
