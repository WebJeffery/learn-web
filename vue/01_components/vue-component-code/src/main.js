import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

class Bus {
  constructor () {
    this.callback = {}
  }
  // 事件监听
  $on(name, fn) {
    this.callback[name] = this.callback[name] || []
    this.callback[name].push(fn)
  }
  // 事件注册
  $emit(name, args) {
    if (this.callback[name]) {
      this.callback[name].forEach(fn => {
        fn(args)
      })
    }
  }
}
Vue.prototype.$bus = new Bus()

new Vue({
  render: h => h(App),
}).$mount('#app')

