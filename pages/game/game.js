// pages/game/game.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    nav:['推荐','榜单'],
    library:['最新优惠','优惠促销','当前在线','最新发布','最高评分'], 
    currentTab_a: 0,
    currentTab_b: 1,
    gameList: [{
      gameName: '绝地求生',
      price: '￥98',
      score:'6.8',
      img: 'https://i1.bvimg.com/672274/72c3da4fceb404e6.jpg'
  },{
      gameName: '侠盗猎车手5',
      price: '￥189',
      score:'9.6',
      img: 'https://i1.bvimg.com/672274/89c04b470f7ba57c.jpg'
  },{
      gameName: '叛逆：沙漠风暴',
      price: '￥98',
      score:'9.2',
      img: 'https://i1.bvimg.com/672274/4e4baadf054736a1.jpg'
  },{
      gameName: '反恐精英：全球攻势',
      price: '免费',
      score:'9.2',
      img: 'https://i1.bvimg.com/672274/e1cb0c48876a6829.jpg'
  },{
      gameName: '人类一败涂地',
      price: '￥24',
      score:'9.4',
      img: 'https://i1.bvimg.com/672274/c2f8dd8ba225b219.jpg'
  },{
      gameName: '刀塔2',
      price: '免费',
      score:'9.8',
        img: 'https://i1.bvimg.com/672274/747bc80f44b3d72a.jpg'
  },{
    gameName: '拳皇14',
    price: '￥249',
    score:'8.4',
        img: 'https://i1.bvimg.com/672274/0b2fb7b00f006990.jpg'
  },{
    gameName: 'Artifact',
    price: '￥138',
    score:'7.4',
        img: 'https://i1.bvimg.com/672274/660fc0f4bf591ba0.jpg'
  }],
  },
  navbarTap: function (e) {
    this.setData({
      currentTab_a: e.currentTarget.dataset.idx
    })
  },
  navbar: function (e) {
    this.setData({
      currentTab_b: e.currentTarget.dataset.name
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