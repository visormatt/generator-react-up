'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _chalk = require('chalk');

var _chalk2 = _interopRequireDefault(_chalk);

var _yosay = require('yosay');

var _yosay2 = _interopRequireDefault(_yosay);

var _logger = require('../common/logger');

var _logger2 = _interopRequireDefault(_logger);

var _path = require('../common/path');

var _path2 = _interopRequireDefault(_path);

var _questions = require('./questions');

var _questions2 = _interopRequireDefault(_questions);

var _ReactUp2 = require('../ReactUp');

var _ReactUp3 = _interopRequireDefault(_ReactUp2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Vendor


// Internal


// Setup
var successMessage = function successMessage(config) {
  return '\n  Setup complete, get started using any of the generators below:\n\n  ' + _chalk2.default.gray(' * yo react-up Name') + '\n  ' + _chalk2.default.gray(' * yo react-up Name class') + '\n  ' + _chalk2.default.gray(' * yo react-up example-test test') + '\n\n  Create your own templates or customize the defaults:\n\n  ' + _chalk2.default.gray(' * ' + config.root + '/' + config.templates + 'mappings.js') + '\n\n  Or run setup again at any point using:\n\n  ' + _chalk2.default.gray(' * yo react-up:setup') + '\n';
};

/**
 * @class Setup
 * @description This class helps the user further customize the generator.
 */

var Setup = function (_ReactUp) {
  _inherits(Setup, _ReactUp);

  function Setup() {
    _classCallCheck(this, Setup);

    return _possibleConstructorReturn(this, (Setup.__proto__ || Object.getPrototypeOf(Setup)).apply(this, arguments));
  }

  _createClass(Setup, [{
    key: 'welcome',
    // eslint-disable-line padded-blocks

    /**
     * @description A nicer way to get started
     */
    value: function welcome() {
      var _this2 = this;

      var message = 'Hello, and welcome to the ' + _chalk2.default.red('react-up') + ' generator!';
      this.log((0, _yosay2.default)(message));

      return this.prompt(_questions2.default.customize).then(function (answer) {
        _this2.stop = !answer.customize;
        if (_this2.stop) _logger2.default.skip('setup');
      }).catch(_logger2.default.error);
    }

    /**
     * @description This will set an domain / domain name which is used in the
     * `package.json` files as we create new Components
     */

  }, {
    key: 'setDomain',
    value: function setDomain() {
      var _this3 = this;

      if (this.stop) return Promise.resolve();

      return this.prompt(_questions2.default.domain).then(function (answer) {
        _this3.config.set('domain', answer.domain);
        _this3.config.set('root', process.cwd());
        // logger.success('- saving domain name:', answer.domain);
      }).catch(_logger2.default.error);
    }

    /**
     * @description Setting up relative paths allows the user to run any of the
     * generators from within any sub-folder. Setting this value to false, will
     * run all reducers relative to the project root where the users `.yo-rc.json`
     */

  }, {
    key: 'setRelative',
    value: function setRelative() {
      var _this4 = this;

      if (this.stop) return Promise.resolve();

      return this.prompt(_questions2.default.relative).then(function (answer) {
        var relative = answer.relative;

        _this4.config.set('relative', relative);
        // logger.success('- use current location:', relative);
      }).catch(_logger2.default.error);
    }

    /**
     * @description Setting a custom template path will copy the defaults to
     * a template folder in the project root for further customization.
     */

  }, {
    key: 'setTemplates',
    value: function setTemplates() {
      var _this5 = this;

      if (this.stop) return Promise.resolve();

      return this.prompt(_questions2.default.template).then(function (answer) {
        var path = answer.path;

        _this5.config.set('templates', path);
        _this5._setupTemplatePath(path); // eslint-disable-line no-underscore-dangle
      }).catch(_logger2.default.error);
    }
  }, {
    key: 'complete',
    value: function complete() {
      if (this.stop) return;
      var config = this.data.config;

      this.log(successMessage(config));
    }

    /**
     * @description Copy the generators default templates into a user defined
     * directory, which allows the user to further customize each
     */

  }, {
    key: '_setupTemplatePath',
    value: function _setupTemplatePath(path) {
      var srcRoot = this.sourceRoot();

      _path2.default.create(path).then(_path2.default.clean(path).then(function () {
        _path2.default.copy(srcRoot, path);
      })).catch(_logger2.default.error);
    }
  }]);

  return Setup;
}(_ReactUp3.default);

// Export our generator available via CLI: `yo react-up:setup`


module.exports = Setup;