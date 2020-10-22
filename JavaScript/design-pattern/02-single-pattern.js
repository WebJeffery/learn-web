
// 不透明的单例
class SingleObject {
  constructor () {

  }
  login () {
    console.log('login ')
  }
}

// 使用闭包
SingleObject.getInstance = (function() {
  let instance
  return function () {
    if (!instance) {
      instance = new SingleObject()
    }
    return instance
  }
})()

// -——————————————————————传统单例模式，透明单例 ————————————————————

// 传统单例模式，透明单例
let singlePattern = (function() {
  let instance
  return function(html) {
    if (!instance) {
      instance = new CreateDiv(html)
    }
    return instance
  }
})()

// -——————————————————————惰性单例模式，透明单例 ————————————————————

// 惰性单例模式
let createLoginLayer = (function() {
  let div
  return function() {
    if (!div) {
      div = document.createElement('div')
      div.innerHTML = '我是登录浮窗'
      div.style.display = 'none'
      document.body.appendChild(div)
    }
    return div
  }
})()

document.getElementById('loginBtn').onclick = function() {
  let loginLayer = createLoginLayer()
  loginLayer.style.display = 'block'
}

// -——————————————————————通用惰性单例模式，透明单例 ————————————————————

// 通用惰性单例模式

let getSingle = function(fn) {
  let result
  return function () {
    return result || (result = fn.apply(this, arguments))
  }
}

let createLoginLayer1 = function () {
  let div = document.createElement('div')
  div.innerHTML = '我是登录浮窗'
  div.style.display = 'none'
  document.body.appendChild(div)
  return div
}

let createSingleLoginLayer = getSingle(createLoginLayer1)

document.getElementById('loginBtn').click = function () {
  let loginLayer = createSingleLoginLayer()
  loginLayer.style.display = 'block'
}



// 惰性单例：需要的时候才创建实例


let obj1 = SingleObject.getInstance()

let obj2 = SingleObject.getInstance()

console.log(obj1 === obj2)