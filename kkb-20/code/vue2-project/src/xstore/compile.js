
class Compile {
  constructor(el, vm) {
    this.$vm = vm
    this.$el = document.querySelector(el)
    
    if (this.$el) {
      this.compile(this.$el)
    }
  }

  compile(el) {
    const childNodes = el.childNodes
    Array.from(childNodes).forEach(node => {
      if (node.nodeType === 1) {
        // 编译元素
        this.compileElement(node)
      } else if (this.isInterpolation(node)) {
        this.compileText(node)
      }

      // 递归子节点
      if(node.childNodes && node.childNodes.length > 0) {
        this.compile(node)
      }
    })
  }

  isInterpolation(node) {
    return node.nodeType === 3 && /\{\{(.*)\}\}/.test(node.textContent)
  }

  // 编译元素
  compileElement(node) {
    let nodeAttrs = node.attributes
    Array.from(nodeAttrs).forEach(attr => {
      let attrName = attr.name
      let exp = attr.value
      if (this.isDirective(attrName)) {
        let dir = attrName.substring(2)
        this[dir] && this[dir](node, exp)
      } else if (this.isEvent(attrName)) { // 作业，处理事件
        const dir = attrName.substring(1)
        this.handlerEvent(node, this.$vm, exp, dir)
      }
    })
  }

  // 指令判断
  isDirective (attr) {
    return attr.indexOf('k-') === 0
  }
  // 事件判断
  isEvent(attr) {
    return attr.indexOf('@') === 0
  }

  /**
   * 事件处理
   * @param {*} node 节点
   * @param {*} vm 组件vue实例
   * @param {*} exp 事件方法名
   * @param {*} dir 事件类型
   */
  handlerEvent(node, vm, exp, dir) {
    node.addEventListener(dir, function () {
      if (vm.methods[exp]) {
        vm.methods[exp].call(vm)
      } else {
        console.error('methods 没有注册该事件')
      }
    })
  }
}