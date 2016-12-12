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
    // const mapping = {
    //   functional: 'Functional.js',
    //   class: 'Class.js',
    //   smart: 'Class.js'
    // };

    this.template('class.js', `${ data.name }/${ data.name }.js`, data);
    this.template('package.json', `${ data.name }/package.json`, data);
    this.template('styles.scss', `${ data.name }/styles.scss`, data);

    if (config.tests) {
      this._tests(data); // eslint-disable-line no-underscore-dangle
    }
  }

  _tests(data) {
    const testFile = `${ data.name }/_test/${ data.name }.test.js`;
    this.template('test.js', testFile, data);
  }
}

// Export our generator
module.exports = Component;
