/* eslint-disable no-console */

// Vendor
import chalk from 'chalk';

/**
 * @description Stylized logger
 */
export default {

  // Used when we use a default value
  default(value) {
    console.log(chalk.gray('- using default'), value);
  },

  // Good place to throw a rollbar possibly
  error(err) {
    console.error(chalk.red('- error'), err);
  },

  // Call out when a user tries to use a template that doesn't exist
  missing(path) {
    const message = chalk.gray('- template not found');
    const file = chalk.yellow(`"${ path }"`);
    const skipping = chalk.gray('skipping.');
    console.error(message, file, skipping);
  },

  // Prompt a question to a user
  question(question, value) {
    console.log(question, chalk.cyan(value));
  },

  // When we skip a prompt
  skip(value) {
    console.log(chalk.gray('- skipping'), value);
  },

  // We've saved a setting so done something good
  success(message, value) {
    console.log(chalk.gray(message), chalk.green(value));
  }
};
