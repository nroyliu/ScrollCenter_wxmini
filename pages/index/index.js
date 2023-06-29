// index.js
Page({
  data:{
      list: [
        1,2,3,4,5,6,7,8,9,10
      ],
      scrollLeft: 0,
      deviceWidth: 0
  },
  click(e){
    const that = this
    var query = wx.createSelectorQuery()
    var item = query.select("#block_" + e.currentTarget.dataset.index)
    item.boundingClientRect().exec(function (rect){
      console.log(e.currentTarget.offsetLeft)
      that.setData({
        scrollLeft: e.currentTarget.offsetLeft + (rect[0].width/2 - that.data.deviceWidth/2)
      })
    })
  },
  onLoad(){
    this.setData({
      deviceWidth: wx.getSystemInfoSync().windowWidth
    })
  }
})
