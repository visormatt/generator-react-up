// Vendor
import chalk from 'chalk';

// Internal
import logger from './common/logger';
import path from './common/path';
import ReactUp from './ReactUp';

/**
 * @class Custom
 * @description Allows the user to define more custom workflows by updating
 * the object found locally in `_templates/mappings.js`
 */
class Custom extends ReactUp {
  // eslint-disable-line padded-blocks

  /**
   * @description We use this method to ensure the user has copied the
   * templates over before running the `react-up:custom` generator.
   */
  check() {
    const { config } = this.data;
    if (!config || !config.templates) {
      this.stop = true;
      this.composeWith('react-up:setup');
    }
  }

  /**
   * @description This will set an author / domain name which is used in the
   * `package.json` files as we create new Customs
   */
  setup() {
    if (this.stop) return Promise.resolve();

    return path.file('mappings.js', this.config).then(mappings => {
      const customBuilds = mappings(this.data);
      const type = this.data.type;
      const node = customBuilds[type];

      this._confirm(node.detail) // eslint-disable-line no-underscore-dangle
        .then(() => {
          this._copy(node); // eslint-disable-line no-underscore-dangle
        })
        .catch(() => {
          logger.skip(node.description || 'custom template');
        });
    });
  }

  _copy(node) {
    if (this.stop) return;

    const type = this.data.type;

    if (node) {
      this._copyFiles(node.files); // eslint-disable-line no-underscore-dangle
    } else {
      const file = chalk.bold('folder -> mappings.js');
      const str = chalk.bold(type);
      const fileError = `File mapping for "${str}" not found.`;
      const templateError = `Please check your local templates ${file}`;

      logger.error(`${fileError} ${templateError}`);
    }
  }

  /**
   * @description Each custom setup can have a `description` and `details`
   * which are used to guide a the end user.
   */
  _confirm(str) {
    const question = {
      type: 'confirm',
      name: 'confirm',
      message: str,
      default: true
    };

    return new Promise((resolve, reject) => {
      this.prompt(question)
        .then(answers => {
          if (answers.confirm) resolve(answers.confirm);
          if (!answers.confirm) reject(answers.confirm);
        })
        .catch(logger.error);
    });
  }

  /**
   * @description We loop over an array of arrays. The top level key is used
   * to indicate the templates to be used.
   */
  _copyFiles(files) {
    const { config, current } = this.data;

    files.map(file => {
      const src = file[0];
      const out = file[1] || file[0];
      const dest = config.relative ? `${current}/${out}` : out;

      try {
        this.template(src, dest, this.data);
      } catch (e) {
        logger.missing(src);
      }
    });
  }
}

// Export our generator available via CLI: `yo react-up <name> <key>`
module.exports = Custom;
