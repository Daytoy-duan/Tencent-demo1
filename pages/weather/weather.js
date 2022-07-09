// pages/weather/weather.js
Page({
  data: {

  },
  onLoad(options) {
    // 襄阳实时天气预报
    wx.request({
      method: 'GET',
      url: 'https://devapi.qweather.com/v7/weather/now?location=101010100&key=9b4dab51fc444ee2817550140526f54f',
      header: {
        'content-type': 'application/json'
      },
      success(res) {
        console.log(res)
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})