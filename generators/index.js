'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _chalk = require('chalk');

var _chalk2 = _interopRequireDefault(_chalk);

var _logger = require('./common/logger');

var _logger2 = _interopRequireDefault(_logger);

var _path = require('./common/path');

var _path2 = _interopRequireDefault(_path);

var _ReactUp2 = require('./ReactUp');

var _ReactUp3 = _interopRequireDefault(_ReactUp2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Vendor


// Internal


/**
 * @class Custom
 * @description Allows the user to define more custom workflows by updating
 * the object found locally in `_templates/mappings.js`
 */
var Custom = function (_ReactUp) {
  _inherits(Custom, _ReactUp);

  function Custom() {
    _classCallCheck(this, Custom);

    return _possibleConstructorReturn(this, (Custom.__proto__ || Object.getPrototypeOf(Custom)).apply(this, arguments));
  }

  _createClass(Custom, [{
    key: 'check',
    // eslint-disable-line padded-blocks

    /**
     * @description We use this method to ensure the user has copied the
     * templates over before running the `react-up:custom` generator.
     */
    value: function check() {
      var config = this.data.config;

      if (!config || !config.templates) {
        this.stop = true;
        this.composeWith('react-up:setup');
      }
    }

    /**
     * @description This will set an author / domain name which is used in the
     * `package.json` files as we create new Customs
     */

  }, {
    key: 'setup',
    value: function setup() {
      var _this2 = this;

      if (this.stop) return Promise.resolve();

      _path2.default.file('_templates/mappings.js').then(function (mappings) {
        var customBuilds = mappings(_this2.data);
        var type = _this2.data.type;
        var node = customBuilds[type];

        _this2._confirm(node.detail) // eslint-disable-line no-underscore-dangle
        .then(function () {
          _this2._copy(node); // eslint-disable-line no-underscore-dangle
        }).catch(function () {
          _logger2.default.skip(node.description || 'custom template');
        });
      });
    }
  }, {
    key: '_copy',
    value: function _copy(node) {
      if (this.stop) return;

      var type = this.data.type;

      if (node) {
        this._copyFiles(node.files); // eslint-disable-line no-underscore-dangle
      } else {
        var file = _chalk2.default.bold('folder -> mappings.js');
        var str = _chalk2.default.bold(type);
        var fileError = 'File mapping for "' + str + '" not found.';
        var templateError = 'Please check your local templates ' + file;

        _logger2.default.error(fileError + ' ' + templateError);
      }
    }

    /**
     * @description Each custom setup can have a `description` and `details`
     * which are used to guide a the end user.
     */

  }, {
    key: '_confirm',
    value: function _confirm(str) {
      var _this3 = this;

      var question = {
        type: 'confirm',
        name: 'confirm',
        message: str,
        default: true
      };

      return new Promise(function (resolve, reject) {
        _this3.prompt(question).then(function (answers) {
          if (answers.confirm) resolve(answers.confirm);
          if (!answers.confirm) reject(answers.confirm);
        }).catch(_logger2.default.error);
      });
    }

    /**
     * @description We loop over an array of arrays. The top level key is used
     * to indicate the templates to be used.
     */

  }, {
    key: '_copyFiles',
    value: function _copyFiles(files) {
      var _this4 = this;

      var _data = this.data,
          config = _data.config,
          current = _data.current;


      files.map(function (file) {
        var src = file[0];
        var out = file[1] || file[0];
        var dest = config.relative ? current + '/' + out : out;

        try {
          _this4.template(src, dest, _this4.data);
        } catch (e) {
          _logger2.default.missing(src);
        }
      });
    }
  }]);

  return Custom;
}(_ReactUp3.default);

// Export our generator available via CLI: `yo react-up <name> <key>`


module.exports = Custom;