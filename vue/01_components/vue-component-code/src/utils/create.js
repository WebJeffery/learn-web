import Vue from 'vue'

function create (componentName, props) {
  const vm = new Vue({
    render: h => h(componentName, {props})
  }).$mount()

  document.body.appendChild(vm.$el)
  // 1、拿到组件实例
  // 2、挂载其remove方法
  const comp = vm.$children[0]
  comp.remove = () => {
    document.body.removeChild(vm.$el)
    comp.$destroy()
  }
  return comp
}
export default create