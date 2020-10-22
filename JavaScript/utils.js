/**
 * 工具方法
 * @param {*} type 
 */


 // 1、判断对象数据类型，利用闭包
const isType = type => target => `[object ${type}]` === Object.prototype.toString.call(target)

const isArray = isType('Array')

// console.log(isArray({}))


