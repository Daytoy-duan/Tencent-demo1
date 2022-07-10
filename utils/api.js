// 接口地址
const base_url = "https://devapi.qweather.com/v7"
//key
const key = "9b4dab51fc444ee2817550140526f54f"

// 封装请求函数
const request = (url, method, data) => {
  // 设置key
  data.key = key
  return new Promise((resolve, reject) => {
    wx.request({
      url: url,
      method: method,
      data: data,
      header: {
        'content-type': 'application/json'
      },
      success(res) {
        resolve(res)
      },
      fail(err) {
        console.log("请求数据失败")
        reject(err)
      }
    })
  })
}

module.exports = {
  // 未来三天天气预报
  threeedays: (data) => {
    return request(base_url + '/weather/3d', 'get', data)
  }
}