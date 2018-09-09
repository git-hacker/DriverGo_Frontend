// pages/dashboard/dashboard.js
const app = getApp()
const myRequest = require('../../lib/api/request')
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  goMap: function () {
    wx.reLaunch({
      url: '/pages/map/map'
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
    this.setData({
      nickname: app.globalData.userInfo.nickName,
      avatar_url: app.globalData.userInfo.avatarUrl
    })
    
    this.postCurrentLocation()
    setInterval(this.postCurrentLocation, 60000)
    
  },

  postCurrentLocation: function(){
    
    let that = this
    wx.getLocation({
      success: function (res) {
        let latitude = res.latitude;
        let longitude = res.longitude;
        console.log(latitude)
        console.log(longitude)
        myRequest.post({
          path: "users/"+getApp().globalData.userId + "/locations",
          data:{
            latitude: latitude,
            longitude: longitude
          },
          success: function(res){
            myRequest.get({
              path: "users/" + getApp().globalData.userId,
              success: function(res){
                let distance = parseFloat(Math.round(res.data.total_distance * 100) / 100).toFixed(2);
                that.setData({
                  distance: distance
                })
              }
            })
          }
        })
      },
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