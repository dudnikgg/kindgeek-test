'use strict';

var gulp          =  require('gulp'),
plumber           =  require('gulp-plumber'),
watch             =  require('gulp-watch'),
autoprefixer      =  require('gulp-autoprefixer'),
sourcemaps        =  require('gulp-sourcemaps'),
sass              =  require('gulp-sass');

gulp.task('scss:dev', function () {
  return gulp.src('./assets/main.scss')
    // .pipe(plumber())
    .pipe(sass({
      filename: 'main.css',
      outputStyle : 'expanded',
      includePaths: ['./assets/vendors/angular-material/'],
      sourceMap: true,
      errLogToConsole: true
    }))

    .pipe(autoprefixer({
      browsers: ['last 12 versions'],
      cascade: false
    }))

    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./app/'));
});

gulp.task('watch:dev', function(){
  watch(['./assets/**/*.scss'], function(event, cb) {
    gulp.start('scss:dev');
  });
});

gulp.task('default', ['scss:dev', 'watch:dev']);
