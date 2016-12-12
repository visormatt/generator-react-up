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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9ndWxwZmlsZS5qcyJdLCJuYW1lcyI6WyJ0YXNrIiwic3JjIiwicGlwZSIsImZvcm1hdCIsImZhaWxBZnRlckVycm9yIiwiY2IiLCJwYWNrYWdlIiwicmVzb2x2ZSIsImluY2x1ZGVVbnRlc3RlZCIsImhvb2tSZXF1aXJlIiwibW9jaGFFcnIiLCJyZXBvcnRlciIsIm9uIiwiZXJyIiwid3JpdGVSZXBvcnRzIiwid2F0Y2giXSwibWFwcGluZ3MiOiI7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBUkE7QUFVQSxlQUFLQSxJQUFMLENBQVUsUUFBVixFQUFvQjtBQUFBLFNBQ2xCLGVBQUtDLEdBQUwsQ0FBUyxTQUFULEVBQ0dDLElBREgsQ0FDUSxxQ0FEUixFQUVHQSxJQUZILENBRVEsMkJBRlIsRUFHR0EsSUFISCxDQUdRLHFCQUFPQyxNQUFQLEVBSFIsRUFJR0QsSUFKSCxDQUlRLHFCQUFPRSxjQUFQLEVBSlIsQ0FEa0I7QUFBQSxDQUFwQjs7QUFRQSxlQUFLSixJQUFMLENBQVUsS0FBVixFQUFpQixVQUFDSyxFQUFELEVBQVE7QUFDdkIseUJBQUk7QUFDRkMsYUFBUyxlQUFLQyxPQUFMLENBQWEsY0FBYjtBQURQLEdBQUosRUFFR0YsRUFGSDtBQUdELENBSkQ7O0FBTUEsZUFBS0wsSUFBTCxDQUFVLFVBQVYsRUFBc0I7QUFBQSxTQUNwQixlQUFLQyxHQUFMLENBQVMsb0JBQVQsRUFDR0MsSUFESCxDQUNRLHFDQURSLEVBRUdBLElBRkgsQ0FFUSw0QkFBUztBQUNiTSxxQkFBaUI7QUFESixHQUFULENBRlIsRUFLR04sSUFMSCxDQUtRLHVCQUFTTyxXQUFULEVBTFIsQ0FEb0I7QUFBQSxDQUF0Qjs7QUFTQSxlQUFLVCxJQUFMLENBQVUsTUFBVixFQUFrQixDQUFDLFVBQUQsQ0FBbEIsRUFBZ0MsVUFBQ0ssRUFBRCxFQUFRO0FBQ3RDLE1BQUlLLGlCQUFKOztBQUVBLGlCQUFLVCxHQUFMLENBQVMsY0FBVCxFQUNHQyxJQURILENBQ1EsNEJBRFIsRUFFR0EsSUFGSCxDQUVRLHlCQUFNO0FBQ1ZTLGNBQVU7QUFEQSxHQUFOLENBRlIsRUFLR0MsRUFMSCxDQUtNLE9BTE4sRUFLZSxVQUFDQyxHQUFELEVBQVM7QUFDcEJILGVBQVdHLEdBQVg7QUFDRCxHQVBILEVBUUdYLElBUkgsQ0FRUSx1QkFBU1ksWUFBVCxFQVJSLEVBU0dGLEVBVEgsQ0FTTSxLQVROLEVBU2EsWUFBTTtBQUNmUCxPQUFHSyxRQUFIO0FBQ0QsR0FYSDtBQVlELENBZkQ7O0FBaUJBLGVBQUtWLElBQUwsQ0FBVSxPQUFWLEVBQW1CLFlBQU07QUFDdkIsaUJBQUtlLEtBQUwsQ0FBVyxDQUNULG9CQURTLEVBRVQsU0FGUyxDQUFYLEVBR0csQ0FBQyxNQUFELENBSEg7QUFJRCxDQUxEOztBQU9BLGVBQUtmLElBQUwsQ0FBVSxZQUFWLEVBQXdCLENBQUMsS0FBRCxDQUF4QjtBQUNBLGVBQUtBLElBQUwsQ0FBVSxTQUFWLEVBQXFCLENBQUMsUUFBRCxFQUFXLE1BQVgsQ0FBckIiLCJmaWxlIjoiZ3VscGZpbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBWZW5kb3JcbmltcG9ydCBpc3RhbmJ1bCBmcm9tICdndWxwLWlzdGFuYnVsJztcbmltcG9ydCBlc2xpbnQgZnJvbSAnZ3VscC1lc2xpbnQnO1xuaW1wb3J0IGV4Y2x1ZGVHaXRpZ25vcmUgZnJvbSAnZ3VscC1leGNsdWRlLWdpdGlnbm9yZSc7XG5pbXBvcnQgZ3VscCBmcm9tICdndWxwJztcbmltcG9ydCBtb2NoYSBmcm9tICdndWxwLW1vY2hhJztcbmltcG9ydCBuc3AgZnJvbSAnZ3VscC1uc3AnO1xuaW1wb3J0IHBhdGggZnJvbSAncGF0aCc7XG5pbXBvcnQgcGx1bWJlciBmcm9tICdndWxwLXBsdW1iZXInO1xuXG5ndWxwLnRhc2soJ3N0YXRpYycsICgpID0+XG4gIGd1bHAuc3JjKCcqKi8qLmpzJylcbiAgICAucGlwZShleGNsdWRlR2l0aWdub3JlKCkpXG4gICAgLnBpcGUoZXNsaW50KCkpXG4gICAgLnBpcGUoZXNsaW50LmZvcm1hdCgpKVxuICAgIC5waXBlKGVzbGludC5mYWlsQWZ0ZXJFcnJvcigpKVxuICApO1xuXG5ndWxwLnRhc2soJ25zcCcsIChjYikgPT4ge1xuICBuc3Aoe1xuICAgIHBhY2thZ2U6IHBhdGgucmVzb2x2ZSgncGFja2FnZS5qc29uJylcbiAgfSwgY2IpO1xufSk7XG5cbmd1bHAudGFzaygncHJlLXRlc3QnLCAoKSA9PlxuICBndWxwLnNyYygnZ2VuZXJhdG9ycy8qKi8qLmpzJylcbiAgICAucGlwZShleGNsdWRlR2l0aWdub3JlKCkpXG4gICAgLnBpcGUoaXN0YW5idWwoe1xuICAgICAgaW5jbHVkZVVudGVzdGVkOiB0cnVlXG4gICAgfSkpXG4gICAgLnBpcGUoaXN0YW5idWwuaG9va1JlcXVpcmUoKSlcbiAgKTtcblxuZ3VscC50YXNrKCd0ZXN0JywgWydwcmUtdGVzdCddLCAoY2IpID0+IHtcbiAgbGV0IG1vY2hhRXJyO1xuXG4gIGd1bHAuc3JjKCd0ZXN0LyoqLyouanMnKVxuICAgIC5waXBlKHBsdW1iZXIoKSlcbiAgICAucGlwZShtb2NoYSh7XG4gICAgICByZXBvcnRlcjogJ3NwZWMnXG4gICAgfSkpXG4gICAgLm9uKCdlcnJvcicsIChlcnIpID0+IHtcbiAgICAgIG1vY2hhRXJyID0gZXJyO1xuICAgIH0pXG4gICAgLnBpcGUoaXN0YW5idWwud3JpdGVSZXBvcnRzKCkpXG4gICAgLm9uKCdlbmQnLCAoKSA9PiB7XG4gICAgICBjYihtb2NoYUVycik7XG4gICAgfSk7XG59KTtcblxuZ3VscC50YXNrKCd3YXRjaCcsICgpID0+IHtcbiAgZ3VscC53YXRjaChbXG4gICAgJ2dlbmVyYXRvcnMvKiovKi5qcycsXG4gICAgJ3Rlc3QvKionXG4gIF0sIFsndGVzdCddKTtcbn0pO1xuXG5ndWxwLnRhc2soJ3ByZXB1Ymxpc2gnLCBbJ25zcCddKTtcbmd1bHAudGFzaygnZGVmYXVsdCcsIFsnc3RhdGljJywgJ3Rlc3QnXSk7XG4iXX0=