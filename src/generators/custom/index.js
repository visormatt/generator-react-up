// Vendor
import chalk from 'chalk';

// Internal
import logger from '../common/logger';
import path from '../common/path';
import ReactUp from '../ReactUp';

/**
 * @class Custom
 * @description Allows the user to define more custom workflows by updating
 * the object found locally in `_templates/mappings.js`
 */
class Custom extends ReactUp { // eslint-disable-line padded-blocks

  /**
   * We use this method to ensure the user has copied the templates over
   * before running the `react-up:custom` generator.
   */
  checkSetup() {
    const { config } = this.data;
    console.log(`--- check`, this.data);

    if (!config.templates) {
      this.stop = true;
      this.composeWith('react-up:setup');
    }
  }

  /**
   * @description This will set an author / domain name which is used in the
   * `package.json` files as we create new Customs
   */
  setup() {
    if (this.stop) return;

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
      const src = file[0];
      const dest = file[1] || file[0];
      this.log(`- copy custom file: ${ chalk.yellow(src) } => ${ chalk.cyan(dest) }`);
      this.template(src, dest, this.data);
    });
  }
}

// Export our generator available via CLI: `yo react-up:custom <key>`
module.exports = Custom;
