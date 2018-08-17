var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var minify = require('gulp-minify');
var imagemin = require('gulp-imagemin');
var ghPages = require('gulp-gh-pages');

gulp.task('sass-autoprexifer', function(){
  return gulp.src('./assets/csss/styles.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(autoprefixer({
          browsers: ['last 2 versions'],
          cascade: false
      }))
      .pipe(gulp.dest('./build/css/'));
})

gulp.task('js-compress', function() {
  gulp.src('./assets/scripts/main.js')
    .pipe(minify())
    .pipe(gulp.dest('./build/scripts/'))
});

gulp.task('imagemin', function() {
    gulp.src('./assets/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./build/images/'))
});

gulp.task('deploy', function() {
  return gulp.src('./build/**/*')
    .pipe(ghPages());
});
