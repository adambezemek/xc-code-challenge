const path = require('path');

module.exports = {
  configureWebpack: {
    devServer: {
      port: 8080,
    },
    module: {
      rules: [
        // ... other rules omitted

        // this will apply to both plain `.scss` files
        // AND `<style lang="scss">` blocks in `.vue` files
        {
          test: /\.scss$/,
          use: [
            "style-loader", "css-loader", 'postcss-loader', "sass-loader"
          ],
        }
      ]
    },
  },
};
