
/**
 * 1、数据响应式
 * 
 */
class Xvue {
  constructor (options) {
    this.$options = options
    this.$data = options.data

    // 响应式
    this.observe(this.$data)
    

  }


}

const obj = {}

function defineReactive(obj, key, val) {
  Object.defineProperty(obj, key, {
    get () {
      console.log(`get ${key} : ${val}`)
      return val
    },
    set (newVal) {
      if (newVal !== val) {
        console.log(`set ${key} : ${val}`)
        val = newVal
      }
    }
  })
}

defineReactive(obj, 'foo', 'foo')
obj.foo = 'test foo'

compileElement(node) {
  let nodeAttrs = node.attributes
  Array.from(nodeAttrs).forEach(attr => {
    let attrName = attr.name
    let exp = attr.value
    if (this.isDirective(attrName)) {

    }
  })
}

