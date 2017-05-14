Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(e) {
    var id = e.id;
     console.log(id+' add=>onload')
    if(id){
      getData(id,this);
    }else{
      this.setData({
        id:Date.now()
      })
    }
  },
  changevalue(e){
    var val = e.detail.value;
    // console.log(val)
    this.setData({
      content:val
    })
  },
  cancle(){
    console.log('cancle')
    wx.navigateBack()
  },
  sure(){
    console.log('sure')
    var re = /^\s*$/g;
    if(!this.data.content || re.test(this.data.content)){
      return;
    }
    this.setData({
      time:Date.now()
    })
    setValue(this);
    wx.navigateBack()
  }
})

function getData(id,page){
  console.log('add=>getData')
  var arr = wx.getStorageSync('txt');
  console.log(arr);
  if(arr.length){
    arr.forEach((item)=>{
      console.log(item.id+' '+id)
      if(item.id == id){   
        page.setData({
          id:item.id,
          content:item.content
        })
      }
    })
  }
}
function setValue(page){
  console.log('add=>setValue')
  var arr = wx.getStorageSync('txt');
  var data = [],
      flag = true;
  if(arr.length){
    arr.forEach((item)=>{
      if(item.id == page.data.id){
        item.id = Date.now();
        item.content = page.data.content;
        flag = false;
      }
      data.push(item);
    })
  }
  if(flag){
    data.push(page.data);
  }
  wx.setStorageSync('txt', data);
}