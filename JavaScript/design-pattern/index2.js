function format(str, ...params) {
  // 您的代码写在这里，该函数返回一个格式化后的字符串
  str.replace(/\{[\s]*[\d][\s]*\}/g, function (value) {
    let num = value.match(/\d/)[0]
    let ss = params[num]
  })
}



let str = format('Hello { 2 } asfd {3}', 'a' ,'b', 'World')
console.log(str)