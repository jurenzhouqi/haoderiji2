// pages/index/diary.js
var temp_data;
Page({
  data: {
    article: {}
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
    // console.log(options)
    wx.request({
      url: 'http://8.131.72.201:44/api/pread', //接口地址
      data: {
        'token': getApp().globalData.userInfo.dev_token,
        'usertoken': wx.getStorageSync('usertoken'),
        'articleid': options.id
      },
      method: 'POST',
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      success: function (res) {
        if (res.data.status == 1) {
          console.log(JSON.parse(res.data.data))
          temp_data = JSON.parse(res.data.data)
        } else {
          wx.showToast({
            title: res.data.message,
            icon: 'loading',
            duration: 2000
          })
        }
      }
      
    })
  },
  onReady: function () {
    // 页面渲染完成
    this.setData({
      article: temp_data[0]
    })
  },
})