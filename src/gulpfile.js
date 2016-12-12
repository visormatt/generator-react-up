/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */

// Vendor
import istanbul from 'gulp-istanbul';
import eslint from 'gulp-eslint';
import excludeGitignore from 'gulp-exclude-gitignore';
import gulp from 'gulp';
import mocha from 'gulp-mocha';
import nsp from 'gulp-nsp';
import path from 'path';
import plumber from 'gulp-plumber';

gulp.task('static', () =>
  gulp.src('**/*.js')
    .pipe(excludeGitignore())
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError())
  );

gulp.task('nsp', (cb) => {
  nsp({
    package: path.resolve('package.json')
  }, cb);
});

gulp.task('pre-test', () =>
  gulp.src('generators/**/*.js')
    .pipe(excludeGitignore())
    .pipe(istanbul({
      includeUntested: true
    }))
    .pipe(istanbul.hookRequire())
  );

gulp.task('test', ['pre-test'], (cb) => {
  let mochaErr;

  gulp.src('test/**/*.js')
    .pipe(plumber())
    .pipe(mocha({
      reporter: 'spec'
    }))
    .on('error', (err) => {
      mochaErr = err;
    })
    .pipe(istanbul.writeReports())
    .on('end', () => {
      cb(mochaErr);
    });
});

gulp.task('watch', () => {
  gulp.watch([
    'generators/**/*.js',
    'test/**'
  ], ['test']);
});

gulp.task('prepublish', ['nsp']);
gulp.task('default', ['static', 'test']);
