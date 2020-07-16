
const express = require('express')
const Vue  = require('vue')

// 获取渲染器实例

const { createRenderer } = require('vue-server-renderer')
const renderer = createRenderer()

const server = express()

server.get('/', async (req, res) => {

  const app = new Vue({
    template: '<div>vue hello</div>'
  })

  try {
    // renderToString 将vue实例渲染为html字符串，返回一个promise
    const html = await renderer.renderToString(app)
    res.send(html)
  } catch (error) {
    res.status(500).send('Internal server Error')
  }

})

server.listen(3000, () => {
  console.log('server running')
})