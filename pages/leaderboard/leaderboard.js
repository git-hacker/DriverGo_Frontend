// pages/leaderboard/leaderboard.js
const app = getApp()
const myRequest = require('../../lib/api/request')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    rank: [2,3,4,5,6,7,8,9,10,11,12,13,14,15],
  },

  goDashboard: function () {
    wx.reLaunch({
      url: '/pages/dashboard/dashboard'
    })
  },

   

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    function roundToTwo(num) {
      return +(Math.round(num + "e+2") + "e-2")
    }
    let that = this
    myRequest.get({
      path: "users",
      success: function(res){
        console.log(111, res.data)
        let resData = res.data.forEach(function(e) {
          let shortNum = parseFloat(e.total_distance)
          let newDist = roundToTwo(shortNum)
          e.total_distance = newDist
        })
        console.log(333, res.data)
        that.setData({
          firstUser: res.data.shift(),
          users: res.data
        })
      }
    })
    this.setData({
      nickname: app.globalData.userInfo.nickName,
      avatar_url: app.globalData.userInfo.avatarUrl
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