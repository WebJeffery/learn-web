const watchers = []
export default class Watcher {
  constructor (vm, expOrFn, cb) {
    this.vm = vm
    this.expOrFn = expOrFn
    this.cb = cb
    // 临时放入 watchers 数组
    watchers.push(this)
  }

  update () {
    this.cb.call(this.vm, this.vm[this.expOrFn])
  }
}