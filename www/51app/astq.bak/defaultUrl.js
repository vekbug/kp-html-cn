var android='';
var ios='http://uri6.com/tkio/E77bIna?kwid={keywordid}&creative={creative}';
var down=''
var btndown=''
if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
  down='ios'
  btndown=ios;
} else if (/(Android)/i.test(navigator.userAgent)) {
  down='android'
  btndown=android;
} else {
  down='pc'
  btndown=android;
};

var url1="//nlp.zntec.mobi/landpageManager/getPackage"+window.location.search;
$.ajax({
  type: 'get',
  url: url1,
  data:"",
  dataType:'jsonp',
  jsonp:'callback',
  jsonpCallback:"success_jsonp",
  success: function(data){
    if(data.status=="failed"){

    }else{
      if(down=='ios'){
        btndown=data.data.ios;
      }else{
        btndown=data.data.android;
      }

    }


  },
  error:function(){
    console.log("ERROR");
  },

});
