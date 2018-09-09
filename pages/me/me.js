// pages/me/me.js
const app = getApp()
const myRequest = require('../../lib/api/request')
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  goDashboard: function () {
    wx.reLaunch({
      url: '/pages/dashboard/dashboard'
    })
  },
  goStore: function () {
    wx.reLaunch({
      url: '/pages/store/store'
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(app.globalData.userInfo)
    this.setData({
      nickname: app.globalData.userInfo.nickName,
      avatar_url: app.globalData.userInfo.avatarUrl,
      distance: app.globalData.distance,
      level: app.globalData.level
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})