export default class Dep {
  constructor () {
    this.subs = []
  }
  addSub (sub) {
    this.subs.push(sub)
  }
  removeSub(sub) {
    remove(this.subs, sub)
  }
  // 收集依赖
  depend() {
    if (window.target) {
      this.addSub(window.target)
    }
  }

  // 派发更新
  notify() {
    const subs = this.subs.slice()
    for (let index = 0, l = subs.length; index < l; index++) {
      subs[index].update()
    }
  }
}

function remove (arr, item) {
  if (arr.length) {
    const index = arr.indexOf(item)
    if (index > -1) {
      return arr.splice(index, 1)
    }
  }
}