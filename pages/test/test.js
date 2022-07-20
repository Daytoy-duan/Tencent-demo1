// pages/test/test.js
// 引入高德地图
const amap = require('../../utils/amap-config')
Page({
  data: {
    inputShowed: false,
    inputVal: '',
  },
  // 搜索栏设置
  showInput() {
    this.setData({
      inputShowed: true,
    });
  },
  hideInput() {
    this.setData({
      inputVal: '',
      inputShowed: false,
      tips: [],
      inputVal: ''
    });
  },
  clearInput() {
    this.setData({
      inputVal: '',
      tips: []
    });
  },
  inputTyping: function(e) {
    console.log(e)
    if (e.detail.value == "") {
      this.setData({
        inputVal: "",
        tips: []
      })
    } else {
      this.setData({
        inputVal: e.detail.value,
      });
      // 调用高德地图
      this.keyword(e.detail.value)
    }
  },
  // 根据输入的关键字调用高德地图API
  keyword: function(keyword) {
    var that = this
    amap.map.getInputtips({
      keywords: keyword,
      location: that.data.longitude+','+that.data.latitude,
      success: function(res) {
        console.log('tips', res)
        if (res && res.tips) {
          that.setData({
            tips: res.tips
          })
        }
      },
      fail(info){
        console.log(info)
      }
    })
  },


  onLoad(options) {
    var that = this
    // 获取经纬度信息
    this.setData({
      'latitude': wx.getStorageSync('latitude'),
      'longitude': wx.getStorageSync('longitude')
    })

    // 逆地址解析
    amap.map.getRegeo({
      success(res){
        //console.log(res)
        res[0].iconPath = '../../static/images/location.png'
        that.setData({
          'markers': res
        })
      },
      fail(info){
        console.log(info)
      }
    })
  },

  
  onReady() {

  },

  
  onShow() {

  },

  
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

 
  onPullDownRefresh() {

  },

  
  onReachBottom() {

  },

  
  onShareAppMessage() {

  }
})