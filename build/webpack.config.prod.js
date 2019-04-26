'use strict'

const commonConfig = require('./webpack.config.common')
const merge = require('webpack-merge')
const TerserJSPlugin = require('terser-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { resolve } = require('./utils')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = merge(commonConfig, {
  mode: 'production',
  optimization: {
    minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
  },
  output: {
    filename: '[name].[hash].bundle.js',
    path: resolve('dist')
  },
  devServer: {
    watchOptions: {
      poll: true
    },
    inline: true,
    hot: true
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[hash].css',
      chunkFilename: '[id].[hash].css'
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true
      },
      inject: true
    })
  ]
})
