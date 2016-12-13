'use strict';

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _yeomanAssert = require('yeoman-assert');

var _yeomanAssert2 = _interopRequireDefault(_yeomanAssert);

var _yeomanTest = require('yeoman-test');

var _yeomanTest2 = _interopRequireDefault(_yeomanTest);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('generator-react-up TestComponent', function () {
  before(function () {
    return _yeomanTest2.default.run(_path2.default.join(__dirname, '../generators')).withPrompts({
      create: true,
      tests: true
    }).toPromise();
  });

  it('creates files', function () {
    _yeomanAssert2.default.file(['__test__/TestComponentSpec.js', 'package.json', 'TestComponent.js', 'styles.scss']);
  });
}); // Vendor