"use strict";

var gulp = require('gulp');

var concatCss = require('gulp-concat-css');

gulp.task('concatCss', function () {
  return gulp.src([
    'css/normalize.css',
    'css/main.css'])
    .pipe(concatCss("bundle.css"))
    .pipe(gulp.dest('css/'));
});
