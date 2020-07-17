
// 第1步，创建一个Vue实例

const Vue = require('vue')
const server = require('express')()
const renderer = require('vue-server-renderer').createRenderer()

server.get('*', (req, res) => {
 
})

const app = new Vue({
  template: `<div>Hello the world</div>`
})

// 第 2 步：创建一个 renderer
// const renderer = require('vue-server-renderer').createRenderer()

// 第 3 步，将 Vue 实例渲染为 HTML
// renderer.renderToString(app, (err, html) => {
//   if (err) {
//     console.log(err)
//   } else {
//     console.log('success', html)
//   }
// })

renderer.renderToString(app).then(html => {
  console.log(html)
}).catch(error => {
  console.error(err)
})