const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  mode: 'development',
  entry: './src/principal.js',
  output: {
    filename: 'principal.js',
    path: __dirname + '/public'
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "estilo.css" //arquivo que será externalizado
    })
  ],
  module: {
    rules: [{  //regras, loaders
      test: /\.s?[ac]ss$/, //loader para arquivos .css, .scss e .sass
      use: [
        MiniCssExtractPlugin.loader, //plugin conflitante com o abaixo
        //'style-loader', //Adiciona CSS a DOM injetando a tag <style>
        'css-loader', //interpreta @import, url()...
        'sass-loader'
      ]
    }]
  }
}