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

  // Keep our error logging consistent and a good place to throw a rollbar
  error(err) {
    console.error('Setup error:', err);
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
