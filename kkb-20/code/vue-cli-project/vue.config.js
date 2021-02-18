const path = require('path')
const port = 7070

module.exports = {
  //publicPath: '/best-plactice', // 部署应用包时的基本 URL
  devServer: {
    port
  },
  configureWebpack: {
    name: "vue项⽬最佳实践",
    resolve: {
      alias: {
        components: path.join(__dirname, '/src/component')
      }
    }
  },
  chainWebpack(config) {
    // console.log(config)
  }
}