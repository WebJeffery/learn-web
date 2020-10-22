

function parseURL (url) {
  let arr = []
  url = url.replace('/n', '')
  url = url.slice(url.indexOf('#') + 1)
  let [hash, query] = url.split('?')
  arr.push(hash)

  let queryArr = query.split('&').map(item => {
    return item.replace('=', ' ')
  })

  console.log(arr.concat(queryArr))
  return arr.concat(queryArr)
}

let str = 'http://163.com/role/search/#page?/npageSize=20&pageNumber=10'

parseURL(str)