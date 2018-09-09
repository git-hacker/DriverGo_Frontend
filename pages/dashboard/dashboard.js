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
    let that = this
    myRequest.get({
      path: "users/" + getApp().globalData.userId,
      success: function (res) {
        let km = res.data.total_distance
        let level = 1
        if (km<1000)
        {
          
        }
        else if (km>=1000 && km < 2000)
        {
          level = 2
        }
        else if (km<3000 && km>=2000)
        {
          level = 3
        }
        else if(km >= 3000 && km<4000)
        {
          level = 4
        }
        else if (km >= 4000 && km < 5000)
        {
          level = 5
        }
        else if (km >= 5000 && km < 6000) {
          level = 6
        }

        else if (km >= 6000 && km < 7000) {
          level = 7
        }
        else if (km >= 7000 && km < 8000) {
          level = 8
        }
        else if (km >= 8000 && km < 9000) {
          level = 9
        }
        else if (km >= 9000 && km < 10000) {
          level = 10
        }
        that.setData({
          level: level
        })
        myRequest.put({
          path: "users/" + getApp().globalData.userId ,
          data: {
            level:that.data.level
          },
          success: function (res) {
            app.globalData.level = res.data.level
          }
        })

      }
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
                let distance = parseFloat(Math.round(res.data.total_distance * 100) / 100).toFixed(2);                app.globalData.distance = distance
                console.log(res.data.level)
                that.setData({
                  distance: distance,
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