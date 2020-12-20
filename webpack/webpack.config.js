const modoDev = process.env.NODE_ENV !== 'production'
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')

module.exports = {
  mode: modoDev ? 'development' : 'production',
  entry: './src/principal.js',
  output: {
    filename: 'principal.js',
    path: __dirname + '/public'
  },
  devServer: {
    contentBase: './public',
    port: 3333
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        parallel: true,
        terserOptions: {
          ecma: 6
        }
      }),
      new OptimizeCSSAssetsPlugin({})
    ]
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
    }, {
      test: /\.(png|svg|jpg|gif)$/, //loader para imagens
      use: ['file-loader']
    }]
  }
}