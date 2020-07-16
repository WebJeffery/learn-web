// 创建 vue 实例

const Vue  = require('vue')
const app = new Vue({
  template: '<div>vue hello</div>'
})

// 获取渲染器实例

const { createRenderer } = require('vue-server-renderer')
const renderer = createRenderer()

renderer.renderToString(app).then((html) => {
  console.log(html)
}).catch((error) => {
  console.log(error)
})
