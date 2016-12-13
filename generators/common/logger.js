'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _chalk = require('chalk');

var _chalk2 = _interopRequireDefault(_chalk);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @description Stylized logger
 */
exports.default = {

  // Used when we use a default value
  default: function _default(value) {
    console.log(_chalk2.default.gray('- using default'), value);
  },


  // Good place to throw a rollbar possibly
  error: function error(err) {
    console.error(_chalk2.default.red('- error'), err);
  },


  // Call out when a user tries to use a template that doesn't exist
  missing: function missing(path) {
    var message = _chalk2.default.gray('- template not found');
    var file = _chalk2.default.yellow('"' + path + '"');
    var skipping = _chalk2.default.gray('skipping.');
    console.error(message, file, skipping);
  },


  // Prompt a question to a user
  question: function question(_question, value) {
    console.log(_question, _chalk2.default.cyan(value));
  },


  // When we skip a prompt
  skip: function skip(value) {
    console.log(_chalk2.default.gray('- skipping'), value);
  },


  // We've saved a setting so done something good
  success: function success(message, value) {
    console.log(_chalk2.default.gray(message), _chalk2.default.green(value));
  }
}; /* eslint-disable no-console */

// Vendor