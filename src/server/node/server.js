/**
 * Simple Express.js server
 *
 * n.b. the order of `server.use` statements in this module is important
 */

// In order to use ES6 imports, we use `babel-register` to transform all our (server-side) ES6 imports
// transforms everything after this; see <https://babeljs.io/docs/en/babel-register/>
require('babel-register');

const PORT_NUMBER  = process.env.PORT || 8080;
const isProduction = process.env.NODE_ENV === 'production';

const opn       = require('opn');
const path      = require('path');
const Express   = require('express');
const server    = Express();
const staticMiddleware = Express.static('dist');


// --------------------------------------------------
// if development mode:
// --------------------------------------------------
if (!isProduction) {
    const webpack       = require('webpack');
    const webpackConfig = require('../../../config/webpack.dev.js');
    const compiler      = webpack(webpackConfig);

    const webpackDevMiddleware = require('webpack-dev-middleware')(
        compiler,
        webpackConfig.devServer
    );

    const webpackHotMiddleware = require('webpack-hot-middleware')(
        compiler,
        webpackConfig.devServer
    );

    server.use(webpackDevMiddleware);
    server.use(webpackHotMiddleware);

    // start server:
    server.use(staticMiddleware);

    server.listen(PORT_NUMBER, () => {
        console.log('\n---------- Starting in development mode ----------');
        console.log(`Server is listening to http://localhost:${PORT_NUMBER}\n`);
    });

    opn(`http://localhost:${PORT_NUMBER}`);
}

// --------------------------------------------------
// if production mode:
// --------------------------------------------------
else {
    server.use(staticMiddleware);

    server.listen(PORT_NUMBER, () => {
        console.log(`\nServer is listening to http://localhost:${PORT_NUMBER}\n`);
    });
}
