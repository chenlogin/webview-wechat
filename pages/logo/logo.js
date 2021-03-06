// pages/logo/logo.js
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		title:"initial title"
	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (options) { },

	/**
	 * 生命周期函数--监听页面初次渲染完成
	 */
	onReady: function () { },

	/**
	 * 生命周期函数--监听页面显示
	 */
	onShow: function () {
		console.log('current route: ',this.route);
	},

	/**
	 * 生命周期函数--监听页面隐藏
	 */
	onHide: function () { },

	/**
	 * 生命周期函数--监听页面卸载
	 */
	onUnload: function () { },

	/**
	 * 页面相关事件处理函数--监听用户下拉动作
	 */
	onPullDownRefresh: function () { },

	/**
	 * 页面上拉触底事件的处理函数
	 */
	onReachBottom: function () { },

	/**
	 * 用户点击右上角分享
	 */
	onShareAppMessage: function () { },
	onTap: function(){
		wx.navigateTo({
			url: "../landscape/landscape?id=1",
			events: {
				// 为指定事件添加一个监听器，获取被打开页面传送到当前页面的数据
				acceptDataFromOpenedPage: function(data) {
					console.log(data)
				},
				someEvent: function(data) {
					console.log(data)
				}
			},
			success: function(res) {
				// 通过eventChannel向被打开页面传送数据
				res.eventChannel.emit('acceptDataFromOpenerPage', { data: 'test' })
			}
		})
	},
	changeText: function(){
		this.setData({
			title: "new title"
			});
		console.log(this.data.title);
	},
	playAudio: function(){
		const innerAudioContext = wx.createInnerAudioContext();
		innerAudioContext.src ='';
		innerAudioContext.onPlay(() => {
			console.log('开始播放')
		})
		innerAudioContext.onError((res) => {
			console.log(res)
		})
		innerAudioContext.play();		
	}
})