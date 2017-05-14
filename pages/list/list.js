var time = require("../../utils/util");
Page({
  data:{
    lists:[
      
    ]
  },
  onLoad:function(e){
    console.log('loading');
     var arr = wx.getStorageSync('txt') || [];
    //  console.log(arr)
     
    initData(this);
  },
  onShow:function(e){
    initData(this);
  },
  change(e){
    // console.log('change====')
    // console.log(e)
    var id = e.currentTarget.dataset.id;
    console.log(id)

    wx.navigateTo({
      url: '../add/add?id='+id,
    })
  },
  add(){
    // // console.log('add=====')
    // initData(this);
    wx.navigateTo({
      url: '../add/add',
    })
  }
})

function initData(page){
  var arr = wx.getStorageSync('txt');
  // console.log(arr)
  console.log('list=>start')
  if(arr.length){
    arr.forEach((item,i)=>{
      var t = new Date(Number(item.time));
      item.time = time.formatTime(t);
    })
    page.setData({
      lists:arr
    })
  }
}