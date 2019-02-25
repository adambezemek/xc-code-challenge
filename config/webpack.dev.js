const path              = require('path');
const webpack           = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin   = require('vue-loader/lib/plugin');

const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
    entry: {
        // this is the same as `import` statements in `main.js`:
        // n.b. order matters (e.g. web entry needs to be loaded last):
        main: [
            'babel-runtime/regenerator',
            'webpack-hot-middleware/client?reload=true',    // creates websocket connection (and reloading on change)
            './src/main.js'
        ]
    },


    mode: 'development',


    output: {
        // name of file after webpack process and outputs:
        filename: '[name]-bundle.js',               // the `[name]` string interpolates the name in the entry object (so this will become `main-bundle.js`)

        path: path.resolve(__dirname, '../dist'),   // all of our files will end up in `dist/`

        publicPath: '/' // n.b. we can set this to other locations, like `/js`
    },

    // we can use DevTools (only in Chromium) to debug both client and server Webpack code;
    // add breakpoints in your code with the keyword `debugger`:
    devtool: "source-map",      // add source-maps for bundles


    module: {
        // rules that webpack uses when it encounters various file types:
        rules: [
            // ---------- Vue: ----------
            // see <https://vue-loader.vuejs.org/options.html>
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    hotReload: true
                }
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
                    'vue-style-loader',
                    'css-loader',           // style-loader is responsible for injecting the css into the html
                    'sass-loader'
                ]
            },

            // ---------- CSS: ----------
            {
                // regex for file extensions we are targeting:
                test: /\.css$/,

                // specify loaders:
                use: [
                    'vue-style-loader',
                    'style-loader',         // style-loader is responsible for injecting the css into the html
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


    plugins: [
        new VueLoaderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new HTMLWebpackPlugin({
            template: './src/public/index.html'
        })
    ]
};
