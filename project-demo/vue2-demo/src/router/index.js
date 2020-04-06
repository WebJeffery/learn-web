import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import cropperDemo from '@/components/base/cropperImage/cropperDemo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/cropperDemo',
      name: 'cropperDemo',
      component: cropperDemo
    }
  ]
})
