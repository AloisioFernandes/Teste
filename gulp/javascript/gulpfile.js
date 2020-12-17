const gulp = require('gulp')
const { series } = require('gulp')
const concat = require('gulp-concat')
const uglify = require('gulp-uglify')
const babel = require('gulp-babel')

function padrao() {
  return gulp.src('src/**/*.js')
    .pipe(babel({
      comments: false,
      presets: ["env"] //busca a versão mais atual do javascript
    }))
    .pipe(uglify()) //coloca todo o código em linha única sem espaços
    .on('error', (err) => console.log(err))
    .pipe(concat('codigo.min.js')) //insere o código no arquivo codigo.min.js
    .pipe(gulp.dest('build'))
}

function fim(cb) {
  console.log('Fim!!!')
  return cb()
}

exports.default = series(padrao, fim)