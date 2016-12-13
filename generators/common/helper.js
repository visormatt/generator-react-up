'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _lodash = require('lodash');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Setup
// Vendor
var now = new Date();
var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

var month = months[now.getMonth()];

/**
 * @description Some generic helpers I can see using in each generator
 */
exports.default = {

  // Our Components and classes should be generated consistently
  componentName: function componentName(str) {
    return (0, _lodash.upperFirst)((0, _lodash.camelCase)(str));
  },


  // User friendly date string
  date: function date() {
    return month + ' ' + now.getDate() + ', ' + now.getFullYear();
  },


  // Allows users to copy all templates into a local (project) folder for customization.
  templates: function templates(generator) {
    var projectPath = generator.sourceRoot();
    var userPath = generator.config.get('templates');
    var rootPath = userPath || _path2.default.resolve(projectPath, '../../templates');

    generator.sourceRoot(rootPath);
  }
};