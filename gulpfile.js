var gulp = require('gulp')
var imagemin = require('gulp-imagemin')
var htmlmin = require("gulp-htmlmin")
var cleancss = require('gulp-clean-css')
var uglify = require('gulp-uglify')
var pump = require('pump')
var dir = './dist'

gulp.task('images', function () {
  pump([
    gulp.src('./web/images/**/*.*'),
    imagemin({
      progressive: true
    }),
    gulp.dest('./dist/images')
  ])
});
gulp.task('minify-html', function (cb) {
  var opts = {
    collapseWhitespace: true,
    preventLineBreaks: true,
    removeComments: true,
    removeEmptyAttributes: true,
    minifyJS: true,
    minifyCSS: true,
    minifyURLs: true,
  }
  pump([
    gulp.src('./web/**/*.html'),
    htmlmin(opts),
    gulp.dest(dir)
  ], cb)
})
gulp.task('minify-css', function (cb) {
  pump([
    gulp.src('./web/**/*.css'),
    cleancss({ compatibility: 'ie8' }),
    gulp.dest(dir)
  ])
})
gulp.task('minify-js', function (cb) {
  pump([
    gulp.src('./web/**/*.js'),
    uglify(),
    gulp.dest(dir)
  ], cb)
})
gulp.task('default', ['minify-css', 'minify-js', 'minify-html', 'images'])
