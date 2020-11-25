//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
  },
  onLoad: function () {
    setTimeout(function(){
      wx.redirectTo({
        url: '../user/index'
      })
    },3000
    )
  }
})
