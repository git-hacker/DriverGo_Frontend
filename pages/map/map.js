// pages/map/map.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    markers: [{
      iconPath: "/lib/images/location-green.png",
      id: 0,
      latitude: 23.099994,
      longitude: 113.324520,
      width: 30,
      height: 30
    },
      {
        iconPath: "/lib/images/location-green.png",
        id: 0,
        latitude: 23.0875394,
        longitude: 113.354520,
        width: 30,
        height: 30
      },
      {
        iconPath: "/lib/images/location-green.png",
        id: 0,
        latitude: 23.0775394,
        longitude: 113.314520,
        width: 30,
        height: 30
      }],
  },

  markertap(e) {
    wx.reLaunch({
      url: '/pages/dashboard/dashboard'
    })
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
  goMe: function () {
    wx.reLaunch({
      url: '/pages/me/me'
    })
  },
  goLeaderboard: function () {
    wx.navigateTo({
      url: '/pages/leaderboard/leaderboard',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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