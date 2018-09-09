// login/login/login.js
const app = getApp()
const myRequest = require('../../lib/api/request')

Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const host = 'http://localhost:3000/'
    console.log('processing to login')
    const that = this
    wx.login({
      success: res => {
        console.log(res)
        wx.request({
          url: host + 'login',
          method: 'post',
          data: {
            code: res.code
          },
          success: res => {
            console.log(res)
            getApp().globalData.userId = res.data.userId
            that.setData({
              buttonClickable:true
            })
          }
        })
      }
    })
  },
  getUserInfo: function (e) {
    const that = this
    // console.log(222222, e)
    app.globalData.userInfo = e.detail.userInfo

    this.setData({
      userInfo: e.detail.userInfo
    })
    myRequest.put({
      path: `users/${app.globalData.userId}`,
      data: {
        nickname: e.detail.userInfo.nickName,
        gender: e.detail.userInfo.gender,
        avatar_url: e.detail.userInfo.avatarUrl
      },
      success: function () {
        wx.reLaunch({
          url: '/pages/dashboard/dashboard'
        })
      }
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