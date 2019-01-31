var path = require('path');
var VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
    mode: 'development',
    entry: './client/entry.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        publicPath: '/dist',
        filename: 'build.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                loader: 'css-loader',
                options: {
                    modules: true,
                    localIdentName: '[local]_[hash:base64:8]'
                }
            },
            {
                test: /\.css$/,
                loader: 'style-loader'
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'

            },
            {
                test: /\.js$/,
                loader: 'babel-loader'
            },
            {
                test: /\.jpg$/,
                loader: 'file-loader'
            },
        ]
    },
    plugins: [
        new VueLoaderPlugin()
    ],
}