// pages/index/manager.js
var temp_data;
Page({
  data: {
    items: []
  },
  onLoad: function (e) {
    //页面初始化后发出新的请求
    //检测是否有参数传递，有参数的话执行删除操作，并返回
    if (e.id == null) {
      //刷新页面
      this.getArticle(e);
    } else {
      //删除
      this.delArticle(e)
      setTimeout(this.getArticle(),2000)
    }

  },
  onReady: function () {
    // 页面渲染完成
    this.setData({
      items: temp_data
    })
  },
  getArticle: function (e) {
    wx.request({
      url: 'http://8.131.72.201:44/api/list', //接口地址
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
  delArticle: function (e) {
    console.log(e)
    //页面初始化后发出新的请求
    wx.request({
      url: 'http://8.131.72.201:44/api/delete', //接口地址
      data: {
        'token': getApp().globalData.userInfo.dev_token,
        'usertoken': wx.getStorageSync('usertoken'),
        'articleid': e.id
      },
      method: 'POST',
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      success: function (res) {
        console.log(res.data)
        if (res.data.status == 1) {
          // console.log(JSON.parse(res.data.data))
          wx.showToast({
            title: res.data.message,
            icon: 'loading',
            duration: 2000
          })
        } else {
          wx.showToast({
            title: res.data.message,
            icon: 'loading',
            duration: 2000
          })
        }
      }
    })
  }
})