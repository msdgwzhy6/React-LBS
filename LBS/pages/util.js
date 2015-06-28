

var Dimensions = require('Dimensions');
var React = require('react-native');
var PixelRatio = React.PixelRatio;


var Util = {
  //屏幕的高度
  height: Dimensions.get('window').height,

  //屏幕的宽度
  width: Dimensions.get('window').width,

  //像素比
  pixelRatio: PixelRatio.get(),

  //最小像素宽
  pixelWidth: 1/PixelRatio.get(),

  //获取JSON数据
  get: function(url, callback){
    var httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = function(){
      if(httpRequest.readyState === 4 && httpRequest.status === 200){
        var str = httpRequest.responseText;
        if(JSON && JSON.parse){
          return callback(JSON.parse(str));
        }else{
          return callback( (new Function("return " + str))() );
        }
      }
      return callback(null);
    };
    httpRequest.open('GET', url, true);
    httpRequest.send();
  },
  //POST
  post: function(url, data){

  },

  //将二维数组转成json对象
  arr2Obj:function(arr){
    var obj = {};
    for(var i in arr){
      var newArr = arr[i];
      obj[arr[i][0]] = arr[i][1];
    }
    return obj;
  }

};


module.exports = Util;
