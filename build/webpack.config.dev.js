'use strict'

const commonConfig = require('./webpack.config.common')
const merge = require('webpack-merge')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { resolve } = require('./utils')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = merge(commonConfig, {
  mode: 'development',
  devServer: {
    host: '0.0.0.0',
    watchContentBase: true,
    compress: true,
    port: 9001
  },
  stats: 'minimal',
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true
    })
  ]
})
