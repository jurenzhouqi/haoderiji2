// pages/index/add.js
Page({
  data:{},
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
  },
   bindDateChange: function(e) {
    this.setData({
      date: e.detail.value
    })
  },
  formSubmit: function(e) {
    // console.log(e.detail.value)
    var temp;
    if(e.detail.value.status){
        temp=1;
    }else{
      temp=0;
    }
    //页面初始化后发出新的请求
    wx.request({
      url: 'http://8.131.72.201:44/api/write', //接口地址
      data: {
        'token': getApp().globalData.userInfo.dev_token,
        'usertoken': wx.getStorageSync('usertoken'),
        'title':e.detail.value.title,
        'date':e.detail.value.date,
        'text':e.detail.value.text,
        'status':temp
      },
      method: 'POST',
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      success: function (res) {
        console.log(res.data)
        if (res.data.status == 1) {
          // console.log(JSON.parse(res.data.data))
          wx.redirectTo({
            url: 'home',
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
  },
})