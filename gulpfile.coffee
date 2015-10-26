gulp = require('gulp')

browserify = require('browserify')
reactify = require('reactify')
source = require('vinyl-source-stream')

gulp.task 'js', ->
  browserify('./public/javascripts/src/app.jsx')
    .transform(reactify)
    .bundle()
    .pipe(source('app.js'))
    .pipe(gulp.dest('public/javascripts/build/'))

gulp.task 'watch', ->
  gulp.watch "public/javascripts/src/**/*.jsx", ["js"]

gulp.task 'default', ['js', 'watch']