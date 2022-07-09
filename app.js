// app.js
App({
  onLaunch() {
    //生命周期
    console.log("这是onLaunch方法")
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
  },
  onShow() {
    console.log("这是onShow方法")
  },
  onHide() {
    console.log("这是onHide方法")
  },
  globalData: {
    userInfo: null
  }
})
