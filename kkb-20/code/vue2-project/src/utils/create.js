

import Vue from 'vue'

function create(Component, props) {
  let Constructor = Vue.extend(Component)
  let vm = new Constructor({el: document.createElement('div')})
  for (const key in props) {
    vm[key] = props[key]
  }

  document.body.appendChild(vm.$el)
  
  vm.remove = () => {
    document.body.removeChild(vm.$el)
    vm.$destroy()
  }
  return vm
}

export default create