

Vue.component('comp', {
  template: '<div>I am comp</div>'
})

/**
 * 创建实例
 * vue 根实例
 * App 根实例
 * comp 组件
 */
const app = new Vue({
  el: '#app',
  data() {
    return {
      msg: "hello the world"
    }
  },
})

console.log(app.$options.render);


// 生命周期 ，带子组件的 -》创建自上而下，挂载自下而上
        // parent create
        //      parent beforeMount
        //          child create
        //          child beforeMount
        //          child mounted
        //      parent mounted 