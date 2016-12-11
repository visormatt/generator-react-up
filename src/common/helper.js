// Vendor
import path from 'path';
import { camelCase, upperFirst } from 'lodash';

// Setup
const now = new Date();
const months = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

const month = months[now.getMonth()];

/**
 * @description Some generic helpers I can see using in each generator
 */
export default {

  // Our Components and classes should be generated consistently
  componentName(str) {
    return upperFirst(camelCase(str));
  },

  // User friendly date string
  date() {
    return `${ month } ${ now.getDate() }, ${ now.getFullYear() }`;
  },

  // Allows users to copy all templates into a local (project) folder for customization.
  templates(generator) {
    let rootPath;

    // console.log('--- sourceRoot', generator.sourceRoot()); // eslint-disable-line no-console
    if (generator.config.get('templates')) {
      rootPath = generator.config.get('templates');
    } else {
      rootPath = path.resolve(generator.sourceRoot(), '../../../templates');
    }

    generator.sourceRoot(rootPath);
  }
};
