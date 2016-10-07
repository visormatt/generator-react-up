'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

describe('generator-react-up TestComponent', function () {
  before(function () {
    return helpers.run(path.join(__dirname, '../generators/app'))
      .withPrompts({
        addTests: true,
        createComponent: true,
        useRadium: true
      })
      .toPromise();
  });

  it('creates files', function () {
    assert.file([
      '__test__/TestComponentSpec.js',
      'package.json',
      'TestComponent.js',
      'styles.scss'
    ]);
  });
});
