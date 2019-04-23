// vue.config.js
module.exports = {
  chainWebpack: config => {
    const oneOfsMap = config.module.rule('scss').oneOfs.store
    oneOfsMap.forEach(item => {
      item
        .use('sass-resources-loader')
        .loader('sass-resources-loader')
        .options({
          resources: ['./src/assets/scss/_variables.scss']
        })
        .end()
    })
  }
}
