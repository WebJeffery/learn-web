


export default {
  methods: {
    /**
     * 派发组件 父 -> 子 通信
     * @param {组件名} componentName 
     * @param {通信数据} data 
     */
    dispatch (componentName, data) {
      let parent = this.$parent
      // 深层遍历找到对应的父层组件
      while(parent) {
        if (parent) {
          parent.$emit(componentName, data)
          parent = parent.$parent
        } else {
          break
        }
      }
      if (parent) {
        parent.$emit.call(parent, componentName, data)
      }
    },
    /**
     * 广播组件 子 -> 父 通信
     * @param {组件名} componentName 
     * @param {通信数据} data 
     */
    broadcast (componentName, data) {
      broadcast.call(this, componentName, data)
    }
  }
}

function broadcast(componentName, data) {
  this.$children.forEach(child => {
    // 子元素触发 $emit
    child.$emit.call(child, componentName, data)
    if (child.$children.length) {
      broadcast.call(child, componentName, data)
    }
  })
}