'use strict';

let gulp = require('gulp');
let uglify = require('gulp-uglify');
let rename = require('gulp-rename');
let babel = require('gulp-babel');
let sass = require('gulp-sass');

gulp.task('babelScripts', function () {
  return gulp.src('js/primary.js')
      .pipe(babel())
      .pipe(rename('primary.babel.js'))
      .pipe(gulp.dest('js/'));
});

gulp.task('minifyScripts', ['babelScripts'], function() {
  return gulp.src('js/primary.babel.js')
    .pipe(uglify())
    .pipe(rename('primary.min.js'))
    .pipe(gulp.dest('js/'));
});

gulp.task('compileSass', function () {
  return gulp.src('scss/application.scss')
    .pipe(sass())
    .pipe(gulp.dest('css/'))
})

gulp.task('build', ['compileSass', 'minifyScripts']);

gulp.task('default', ['build']);
