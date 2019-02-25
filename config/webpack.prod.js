const path              = require('path');
const webpack           = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin   = require('vue-loader/lib/plugin');
const MiniCSSExtractPlugin      = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin   = require('optimize-css-assets-webpack-plugin');
const BabelMinifyPlugin         = require('babel-minify-webpack-plugin');


const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
    entry: {
        main: [
            './src/main.js'
        ]
    },


    mode: 'production',


    output: {
        // name of file after webpack process and outputs:
        filename: '[name]-bundle.js',               // the `[name]` string interpolates the name in the entry object (so this will become `main-bundle.js`)

        path: path.resolve(__dirname, '../dist'),   // all of our files will end up in `dist/`

        publicPath: '/' // n.b. we can set this to other locations, like `/js`
    },


    module: {
        // rules that webpack uses when it encounters various file types:
        rules: [
            // ---------- Vue: ----------
            // see <https://vue-loader.vuejs.org/options.html>
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },

            // ---------- JS: ----------
            {
                test: /\.js$/,
                // folders excluded from babel transpiling:
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        // n.b. everything inside `options` is exactly the same as `.babelrc` options:
                        options: {
                            presets: [
                                [
                                    "@babel/preset-env",
                                    {
                                        targets: {
                                            browsers: ["> 1%", "last 2 versions", "not ie <= 10"]
                                        },
                                        debug: false
                                    }
                                ]
                            ],

                            plugins: [
                                "@babel/plugin-transform-runtime"
                            ]
                        }
                    }
                ]
            },

            // ---------- Sass: ----------
            {
                test: /\.scss$/,
                use: [
                    MiniCSSExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            },

            // ---------- CSS: ----------
            {
                // regex for file extensions we are targeting:
                test: /\.css$/,

                // specify loaders:
                use: [
                    MiniCSSExtractPlugin.loader,
                    // 'style-loader',         // style-loader is responsible for injecting the css into the html // TODO: test style-loader vs traditional .css
                    'css-loader'
                ]
            },

            // ---------- HTML: ----------
            {
                // n.b. the `html-webpack-plugin` does the same thing as the `file-loader` and `extract-loader`; thus, we don't use them here:
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader'
                    }
                ]
            },

            // ---------- Images: ----------
            {
                // tries to match any of the following file types (via regex):
                test: /\.(jpe?g|gif|png|svg)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            // returns the (input) image name and extension but also adds a hash to the output name:
                            name: 'images/[name]-[hash:8].[ext]'
                        }
                    }
                ]
            },

        ]
    },


    resolve: {
        // see <https://vuejs.org/v2/guide/installation.html#Webpack>
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    },


    // n.b. loaders apply a task one-at-a-time while plugins apply to all files:
    plugins: [
        new OptimizeCssAssetsPlugin(),
        new MiniCSSExtractPlugin(),
        new VueLoaderPlugin(),
        new HTMLWebpackPlugin({
            template: './src/public/index.html',    // n.b. this can be `.html`, `.ejs`, etc.
            inject:   true,
        }),
        new BabelMinifyPlugin()
    ]
};

if (isProduction) {
    console.log('Building and Optimizing Files...');
}
