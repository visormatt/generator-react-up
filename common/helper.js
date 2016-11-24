// Vendor
var _ = require('lodash');
var path = require('path');

// Setup
var now = new Date();
var months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];
var month = months[now.getMonth()];
var date = month + ' ' + now.getDate() + ', ' + now.getFullYear();

/**
 * @description Our components and classes both need to be capitalized
 */
var componentName = function(str) {
  return _.upperFirst(_.camelCase(str));
};

/**
 * @description We use this to allow users to copy all our the initial
 * templates into a local (project) folder for even more customization.
 */
var templates = function(generator) {
  var rootPath;

  if (generator.config.get('templates')) {
    rootPath = generator.config.get('templates');
  } else {
    rootPath = path.resolve(generator.sourceRoot(), '../../../templates');
  }

  generator.sourceRoot(rootPath);
};

module.exports = {
  componentName: componentName,
  date: date,
  month: month,
  templates: templates
};
