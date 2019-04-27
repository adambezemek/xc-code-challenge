const gulp = require('gulp');
const babel = require('gulp-babel');
const cleanCSS = require('gulp-clean-css');
const concat = require('gulp-concat');
const del = require('del');
const rename = require('gulp-rename');
const sass = require('gulp-sass');
const uglify = require('gulp-uglify');
var server = require('gulp-webserver');

const paths = {
  styles: {
    src: './app/src/styles/**/*.scss',
    dest: './app/dist/styles/'
  },
  scripts: {
    src: './app/src/scripts/**/*.js',
    dest: './app/dist/scripts/'
  }
};

function clean() {
  return del([ './app/dist' ]);
}

function styles() {
  return gulp.src(paths.styles.src)
    .pipe(sass())
    .pipe(cleanCSS())
    .pipe(rename({
      basename: 'main',
      suffix: '.min'
    }))
    .pipe(gulp.dest(paths.styles.dest));
}

function scripts() {
  return gulp.src(paths.scripts.src, { sourcemaps: true })
    .pipe(babel())
    .pipe(uglify())
    .pipe(concat('main.min.js'))
    .pipe(gulp.dest(paths.scripts.dest));
}

function watch() {
  gulp.watch(paths.scripts.src, scripts);
  gulp.watch(paths.styles.src, styles);
}

function serve() {
  gulp.src('app')	
    .pipe(server({
      livereload: true,
      open: true,
      port: 3000
    }));
};

const build = gulp.series(clean, gulp.parallel(styles, scripts));
const dev = gulp.series(clean, gulp.parallel(styles, scripts), serve, watch );

exports.clean = clean;
exports.styles = styles;
exports.scripts = scripts;
exports.watch = watch;
exports.build = build;
exports.serve = serve;
exports.dev = dev;

exports.default = dev;