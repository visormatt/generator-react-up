// Vendor
import chalk from 'chalk';

// Internal
import logger from '../common/logger';
import path from '../common/path';
import ReactUp from '../ReactUp';

/**
 * @class Custom
 * @description Allows the user to define more custom workflows by updating
 * the object found in `templates/custom.js`
 */
class Custom extends ReactUp { // eslint-disable-line padded-blocks

  // hasSetup() {
  //   console.log('-- this.data', this.data); // eslint-disable-line no-console
  // }

  /**
   * @description This will set an author / domain name which is used in the
   * `package.json` files as we create new Customs
   */
  setup() {
    path.file('_templates/mappings.js')
      .then((mappings) => {
        const customBuilds = mappings(this.data);
        const type = this.data.type;
        const node = customBuilds[type];

        if (node) {
          this._copyCustomFiles(node); // eslint-disable-line no-underscore-dangle
        } else {
          const file = chalk.bold('folder -> mappings.js');
          const str = chalk.bold(type);
          logger.error(`File mapping for "${ str }" not found. Please check your local templates ${ file }`);
        }
      });
  }

  /**
   * @description We loop over an array of arrays. The top level key is used
   * to indicate the templates to be used.
   */
  _copyCustomFiles(fileArray) {
    fileArray.map((file) => {
      const src = chalk.yellow(file[0]);
      const dest = chalk.cyan(file[1] || file[0]);
      this.log(`- copy custom file: ${ src } => ${ dest }`);
    });
  }
}

// Export our generator available via CLI: `yo react-up:custom <key>`
module.exports = Custom;
