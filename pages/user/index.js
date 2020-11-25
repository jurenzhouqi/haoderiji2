// pages/user/index.js
Page({
  data: {},
  onLoad: function (options) {
    // 页面初始化发送请求，验证是否登录
    wx.request({
      url: 'http://8.131.72.201:44/api/login', //接口地址
      data: {
        'token': getApp().globalData.userInfo.dev_token,
        'usertoken': wx.getStorageSync('usertoken')
      },
      method: 'POST',
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      success: function (res) {
        // console.log(wx.getStorageSync('usertoken'))
        console.log(res.data)
        if (res.data.status == 1) {
          wx.redirectTo({
            url: '../index/home'
          })
        } else {
          wx.showToast({
            title: res.data.message,
            icon: 'loading',
            duration: 1000,
            success: function (res) {
              wx.redirectTo({
                url: './login'
              })
            }
          })
        }
      }
    })
  }
})