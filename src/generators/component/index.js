// Vendor
import { Base } from 'yeoman-generator';
import { kebabCase } from 'lodash';

// Internal
import helper from '../common/helper';
import logger from '../common/logger';
import questions from './questions';

/**
 * @class Component
 * @description The Component class is used to generate all various types of
 * components. The first parameter is the component name and the second (optional)
 * parameter defines the type of component we'd like to create.
 *
 * This includes:
 *   - pure: stateless / pure functions
 *   - class: smart / stateful
 *   - connected: Redux connected w/ state
 */
class Component extends Base { // eslint-disable-line padded-blocks

  /**
   * @description Anytime we extend a Class as done above, we need to call super
   * to ensure the original Class is initialized. From there we save some basic
   * data and let the generator do it's thing.
   */
  constructor(args, options) {
    super(args, options);

    const name = args[0] ? helper.componentName(args[0]) : 'DemoComponent';
    const type = args[1] ? helper.componentName(args[1]) : 'pure';

    // We'll use this for more data as well later on
    this.data = {
      config: this.config.getAll(),
      slug: kebabCase(name),
      tag: `<${ name } />`,
      type: type.toLowerCase(),
      date: helper.date,
      name
    };
  }

  /**
   * @description This will set an author / domain name which is used in the
   * `package.json` files as we create new Components
   */
  prompts() {
    const data = this.data;
    const prompts = questions(data);

    return this.prompt(prompts)
      .then(answers => {
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
