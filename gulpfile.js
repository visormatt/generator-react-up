'use strict';

var _gulpIstanbul = require('gulp-istanbul');

var _gulpIstanbul2 = _interopRequireDefault(_gulpIstanbul);

var _gulpEslint = require('gulp-eslint');

var _gulpEslint2 = _interopRequireDefault(_gulpEslint);

var _gulpExcludeGitignore = require('gulp-exclude-gitignore');

var _gulpExcludeGitignore2 = _interopRequireDefault(_gulpExcludeGitignore);

var _gulp = require('gulp');

var _gulp2 = _interopRequireDefault(_gulp);

var _gulpMocha = require('gulp-mocha');

var _gulpMocha2 = _interopRequireDefault(_gulpMocha);

var _gulpNsp = require('gulp-nsp');

var _gulpNsp2 = _interopRequireDefault(_gulpNsp);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _gulpPlumber = require('gulp-plumber');

var _gulpPlumber2 = _interopRequireDefault(_gulpPlumber);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */

// Vendor
_gulp2.default.task('static', function () {
  return _gulp2.default.src('**/*.js').pipe((0, _gulpExcludeGitignore2.default)()).pipe((0, _gulpEslint2.default)()).pipe(_gulpEslint2.default.format()).pipe(_gulpEslint2.default.failAfterError());
});

_gulp2.default.task('nsp', function (cb) {
  (0, _gulpNsp2.default)({
    package: _path2.default.resolve('package.json')
  }, cb);
});

_gulp2.default.task('pre-test', function () {
  return _gulp2.default.src('generators/**/*.js').pipe((0, _gulpExcludeGitignore2.default)()).pipe((0, _gulpIstanbul2.default)({
    includeUntested: true
  })).pipe(_gulpIstanbul2.default.hookRequire());
});

_gulp2.default.task('test', ['pre-test'], function (cb) {
  var mochaErr = void 0;

  _gulp2.default.src('test/**/*.js').pipe((0, _gulpPlumber2.default)()).pipe((0, _gulpMocha2.default)({
    reporter: 'spec'
  })).on('error', function (err) {
    mochaErr = err;
  }).pipe(_gulpIstanbul2.default.writeReports()).on('end', function () {
    cb(mochaErr);
  });
});

_gulp2.default.task('watch', function () {
  _gulp2.default.watch(['generators/**/*.js', 'test/**'], ['test']);
});

_gulp2.default.task('prepublish', ['nsp']);
_gulp2.default.task('default', ['static', 'test']);