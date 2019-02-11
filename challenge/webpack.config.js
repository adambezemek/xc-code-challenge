// webpack v4
const path = require("path");
const nodeExternals = require("webpack-node-externals");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: { main: "./src/index.js" },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js"
  },
  devServer: {
    contentBase: "./dist"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader"
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new CopyWebpackPlugin([
      { from: 'src/images', to: 'images' }
    ]),
    new MiniCssExtractPlugin({
      filename: "style.css"
    }),
    new HtmlWebpackPlugin({
      inject: false,
      hash: true,
      template: "./src/index.html",
      filename: "index.html"
    }),
    new OptimizeCSSAssetsPlugin({})
  ]
};
