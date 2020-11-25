// pages/index/home.js
var temp_data;
Page({
  data: {
    items:[]
  },
  onLoad: function (e) {
    //页面初始化后发出新的请求
    wx.request({
      url: 'http://8.131.72.201:44/api/plist', //接口地址
      data: {
        'token': getApp().globalData.userInfo.dev_token,
        'usertoken': wx.getStorageSync('usertoken')
      },
      method: 'POST',
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      success: function (res) {
        console.log(res.data)
        if (res.data.status == 1) {
          // console.log(JSON.parse(res.data.data))
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
      items:temp_data
    })
  },
})