// pages/weather/weather.js
const API = require('../../utils/api')
Page({
  data: {
  altitude: null,
  longitude: null,
  markers: [],
  icon: '../../images/marker.png',
  threedays: []
  },
  onLoad(options) {
    wx.getLocation({
      type: "wgs84",
      // 襄阳实时天气预报
      success: (res)=>  {
        this.setData({
          latitude: res.latitude,
          longitude: res.longitude,
          markers: {
            id: 0,
            latitude: res.latitude,
            longitude: res.longitude,
            width: 40,
            height: 40,
            callout: [{
              'content': '我在这',
              'display': 'ALWAYS',
              'fontsize': '30rpx',
              'padding': '8rpx',
              'boxShadow': '0 0 5rpx #333',
              'borderRadius': '4rpx'
            }]
          }
        })
        let data = {
          location: res.longitude + "," + res.latitude 
        }
        API.threeedays(data).then((res) => {
          console.log(res.data)
          if (res.data.code === "200") {
            this.setData({
              threedays: res.data.daily
            })
          } else {
            wx.showToast({
              title: '正在获取位置信息'
            })
          }
        })
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