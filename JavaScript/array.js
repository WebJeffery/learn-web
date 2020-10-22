

// 1、循环实现数组 map，遍历内部通过 call 调用 fn 方法

const selfMap = function(fn, context) {
  const arr = Array.prototype.slice.call(this)
  const mapArr = []
  
  for(let i = 0; i < arr.length; i++) {

    if (!arr.hasOwnProperty(i)) continue
    mapArr[i] = fn.call(context, arr[i], i, this)
  }
  return mapArr
}

// 实现方式2

const selfMap2 = function(fn, context) {
  let arr = Array.prototype.slice.call(this)

  return arr.reduce((pre, cur, index) => {
    return [...pre, fn.call(context, cur, index, this)]
  }, [])
}

Array.prototype.selfMap = selfMap2
console.log([1, 2, 3].selfMap(num => num * 2))

// 3、