'use strict'

const webpack = require('webpack')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader/lib/index')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { resolve } = require('./utils')

module.exports = {
  entry: [
    './src/app.js'
  ],
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader'
      },
      {
        test: /\.(sass|scss|css)$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              indentedSyntax: true,
              minimize: {
                safe: true
              },
              sourceMap: true
            }
          }
        ]
      },
      {
        test: /\.js$/,
        use: 'babel-loader'
      },
      {
        test: /\.(js|vue)$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        enforce: 'pre',
        options: {
          fix: true
        }
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 8192
        }
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new CopyWebpackPlugin([{
      from: resolve('static/img'),
      to: resolve('dist/static/img'),
      toType: 'dir'
    }]),
    new webpack.HotModuleReplacementPlugin()
  ]
}
