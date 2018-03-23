// Vendor
import fse from 'fs-extra';
import path from 'path';

/**
 * @description Interact with the file system as we need to
 */
export default {
  // Clean a folder removing ALL contents
  clean(folder) {
    return new Promise((resolve, reject) => {
      fse.emptyDir(folder, err => {
        if (err) reject(err);
        if (!err) resolve(folder);
      });
    });
  },

  // Copy our templates into a local directory
  copy(src, destination) {
    const templates = path.resolve(__dirname, '../../templates/');
    return new Promise((resolve, reject) => {
      fse.copy(templates, destination, err => {
        if (err) reject(err);
        if (!err) resolve(src);
      });
    });
  },

  // Create a folder locally, we use this for copying our templates
  create(folder) {
    return new Promise((resolve, reject) => {
      fse.ensureDir(folder, err => {
        if (err) reject(err);
        if (!err) resolve(folder);
      });
    });
  },

  // Check a file exists, used before we copy an item over
  file(location, config) {
    const dirTemplates = config.get('templates');
    const pathTemplates =
      dirTemplates.substr(-1) !== '/' ? `${dirTemplates}/` : dirTemplates;
    const pathRoot = config.get('root');
    const filePath = `${pathRoot}/${pathTemplates}${location}`;

    return new Promise((resolve, reject) => {
      let file;

      try {
        file = require(`${filePath}`);
      } catch (e) {
        return reject(e);
      }

      return resolve(file);
    });
  }
};
