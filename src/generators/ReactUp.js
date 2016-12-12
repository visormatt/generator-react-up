// Vendor
import { Base } from 'yeoman-generator';
import { kebabCase } from 'lodash';

// Internal
import helper from './common/helper';

/**
 * @class ReactUp
 * @description The ReactUp class to gather all the command line information
 * and store it during initialization which we extend from for each generator
 */
class ReactUp extends Base { // eslint-disable-line padded-blocks

  /**
   * @description Anytime we extend a Class as done above, we need to call super
   * to ensure the original Class is initialized. From there we save some basic
   * data and let the generator do it's thing.
   */
  constructor(args, options) {
    super(args, options);

    const name = args[0] ? helper.componentName(args[0]) : false;
    const type = args[1] ? args[1].toLowerCase() : false;

    const config = this.config.getAll();
    const date = helper.date();
    const tag = name ? `<${ name } />` : false;
    const slug = name ? kebabCase(name) : false;

    // We'll use this for more data as well later on
    this.data = { config, date, args, name, slug, tag, type };

    // Used to stop running any public methods left to run
    this.stop = false;

    console.log(`- data -`, this.data); // eslint-disable-line
  }
}

// Export our generator
module.exports = ReactUp;
