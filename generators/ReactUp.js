'use strict';

var _yeomanGenerator = require('yeoman-generator');

var _lodash = require('lodash');

var _helper = require('./common/helper');

var _helper2 = _interopRequireDefault(_helper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Vendor


// Internal


/**
 * @class ReactUp
 * @description The ReactUp class to gather all the command line information
 * and store it during initialization which we extend from for each generator
 */
var ReactUp = function (_Base) {
  _inherits(ReactUp, _Base);

  // eslint-disable-line padded-blocks

  /**
   * @description Anytime we extend a Class as done above, we need to call super
   * to ensure the original Class is initialized. From there we save some basic
   * data and let the generator do it's thing.
   */
  function ReactUp(args, options) {
    _classCallCheck(this, ReactUp);

    // we store this before yeoman resets the root
    var current = process.cwd();

    // Always call super to ensure things are setup

    var _this = _possibleConstructorReturn(this, (ReactUp.__proto__ || Object.getPrototypeOf(ReactUp)).call(this, args, options));

    var name = args[0] ? _helper2.default.componentName(args[0]) : 'Example';
    var type = args[1] ? args[1].toLowerCase() : 'pure';

    var config = _this.config.getAll();
    var date = _helper2.default.date();
    var slug = name ? (0, _lodash.kebabCase)(name) : false;
    var tag = name ? '<' + name + ' />' : false;

    // We'll use this for more data as well later on
    _this.data = {
      args: args, // Hold onto all the arguments we are given
      config: config, // Any saved information (ie: domain, template path)
      current: current, // The directory the generator is fired from
      date: date, // Current data string
      name: name, // Name is usally used for filesnames and folders
      options: options, // Any flags used `ie: --pure, --connected`
      slug: slug, // Lowercased and `-` seperated words
      tag: tag, // A tag created from the `name` above
      type: type // not used yet
    };

    // Used to stop running any public methods left to run
    _this.stop = false;

    // Setup the default or custom template path
    _helper2.default.templates(_this);
    return _this;
  }

  return ReactUp;
}(_yeomanGenerator.Base);

// Export our generator


module.exports = ReactUp;