const gulp = require('gulp')
const { series, parallel } = require('gulp')

const antes1 = (cb) => {
  console.log('Tarefa Antes 1!')
  return cb()
}

const antes2 = (cb) => {
  console.log('Tarefa Antes 2!')
  return cb()
}

function copiar(cb) {
  // gulp.src(['pastaA/arquivo1.txt', 'pastaA/arquivo2.txt']) //seleciona arquivos de entrada, insumos
  gulp.src('pastaA/**/*.txt') //seleciona todos os arquivo .txt
      .pipe(gulp.dest('pastaB')) //aplica alterações nos arquivos de entrada
  return cb()
}

const fim = (cb) => {
  console.log('Tarefa Fim!')
  return cb()
}

module.exports.default = series( //tarefas em sequência
  parallel(antes1, antes2), //tarefas em paralelo
  copiar,
  fim
)