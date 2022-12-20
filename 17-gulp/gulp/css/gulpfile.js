const { series, parallel } = require('gulp')
const gulp = require('gulp')
// const sass = require('gulp-sass')
const uglifycss = require('gulp-uglifycss')
const concat = require('gulp-concat')
var sass = require('gulp-sass')(require('sass'))

function copiarHTML() {
   return gulp.src('./src/index.html')
         .pipe(gulp.dest('build/'))
}

function transformacaoCSS(cb) {
   return gulp.src('./src/sass/index.scss')
         .pipe(sass().on('error', sass.logError))
         .pipe(uglifycss({ "glifyComments": true }))
         .pipe(concat('estilo.min.css'))
         .pipe(gulp.dest('build/css'))
}

exports.default = parallel(transformacaoCSS, copiarHTML)
