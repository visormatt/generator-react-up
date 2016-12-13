'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _fsExtra = require('fs-extra');

var _fsExtra2 = _interopRequireDefault(_fsExtra);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @description Interact with the file system as we need to
 */
// Vendor
exports.default = {

  // Clean a folder removing ALL contents
  clean: function clean(folder) {
    return new Promise(function (resolve, reject) {
      _fsExtra2.default.emptyDir(folder, function (err) {
        if (err) reject(err);
        if (!err) resolve(folder);
      });
    });
  },


  // Copy our templates into a local directory
  copy: function copy(src, destination) {
    var templates = _path2.default.resolve(__dirname, '../../templates/');
    return new Promise(function (resolve, reject) {
      _fsExtra2.default.copy(templates, destination, function (err) {
        if (err) reject(err);
        if (!err) resolve(src);
      });
    });
  },


  // Create a folder locally, we use this for copying our templates
  create: function create(folder) {
    return new Promise(function (resolve, reject) {
      _fsExtra2.default.ensureDir(folder, function (err) {
        if (err) reject(err);
        if (!err) resolve(folder);
      });
    });
  },


  // Check a file exists, used before we copy an item over
  file: function file(location) {
    return new Promise(function (resolve, reject) {
      var file = void 0;

      try {
        file = require(process.cwd() + '/' + location);
      } catch (e) {
        return reject(e);
      }

      return resolve(file);
    });
  }
};