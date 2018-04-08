const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const htmlmin = require("gulp-htmlmin");
const cleancss = require('gulp-clean-css');
const uglify = require('gulp-uglify');
const minify = require("gulp-babel-minify");
const pump = require('pump');
const dir = './dist';

gulp.task('images', function () {
  pump([
    gulp.src('./public/images/**/*.*'),
    imagemin({
      progressive: true
    }),
    gulp.dest('./dist/images')
  ])
});
gulp.task('minify-html', function (cb) {
  const opts = {
    collapseWhitespace: true,
    preventLineBreaks: true,
    removeComments: true,
    removeEmptyAttributes: true,
    minifyJS: true,
    minifyCSS: true,
    minifyURLs: true,
  }
  pump([
    gulp.src('./public/**/*.html'),
    htmlmin(opts),
    gulp.dest(dir)
  ], cb)
})
gulp.task('minify-css', function (cb) {
  pump([
    gulp.src('./public/**/*.css'),
    cleancss({ compatibility: 'ie8' }),
    gulp.dest(dir)
  ])
})
gulp.task('minify-js', function (cb) {
  pump([
    gulp.src('./public/**/*.js'),
    uglify(),
    gulp.dest(dir)
  ], cb)
})
gulp.task('minify-babel-js', function (cb) {
  pump([
    gulp.src('./public/**/*.js'),
    minify({
      mangle: {
        keepClassName: true
      }
    }),
    gulp.dest(dir)
  ], cb)
})
gulp.task('default', ['minify-css', 'minify-babel-js', 'minify-html', 'images'])
