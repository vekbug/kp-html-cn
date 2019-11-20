    // 获取神马搜索词
    function SearchWord()
    {
      try 
      {
        var ref=document.referrer;
      // var ref='https://m.sm.cn/s?q=%E4%BA%A4%E5%8F%8B&from=smor&safe=1&snum=6';       
      var str_ref=decodeURIComponent(ref);
      var sls_ref=str_ref.split('?')[1].split('&');
      var f_str=new RegExp("q=");
      for( var i = 0; i <sls_ref.length; i++){
        if(f_str.test(sls_ref[i])){
          var final_str_ref=sls_ref[i].split('=')[1];
          return final_str_ref;
          break;
        }
      };      
    }
    catch(err)
    {
      var ref_2=document.referrer;
      var str_ref_2=decodeURIComponent(ref_2);
      return str_ref_2;
    }
  }
      // 获取当前时间
      function nowTime()
      {
        var date=new Date();
        var curMouth=date.getMonth()+1; 
        var curTime=date.getFullYear()+'/'+curMouth+'/'+date.getDate()+' '+date.getHours()+':'+date.getMinutes()+':'+date.getSeconds();
        return curTime;
      }
      var Sword=SearchWord(); 
      var curTime=nowTime();
      // alert(Sword+'::'+curTime);

      //  点击任意位置统计事件
      // var JDTime="_czc.push(['_trackEvent','点击任意位置下载','"+curTime+"','"+Sword+"']);";
      // var Bdown = document.getElementsByClassName("js_down");
      // for(var i=0 ;i<Bdown.length;i++){
      //   Bdown[i].setAttribute('onclick',JDTime);
      //   console.log("j",Bdown[i]);
      // }

      var downButtonTime="_czc.push(['_trackEvent','立即下载','"+curTime+"','"+Sword+"']);";
      var downButton=document.getElementById('js_down_button');
      console.log(downButton);
      downButton.setAttribute('onclick',downButtonTime);

      var downFreeButtonTime="_czc.push(['_trackEvent','免费下载','"+curTime+"','"+Sword+"']);";
      var downFreeButton=document.getElementById('js_down_free_button');
      console.log(downFreeButton);
      downFreeButton.setAttribute('onclick',downFreeButtonTime);
      
      var downMoreButtonTime="_czc.push(['_trackEvent','更多精彩内容','"+curTime+"','"+Sword+"']);";
      var downMoreButton=document.getElementById('js_down_more_button');
      console.log(downMoreButton);
      downMoreButton.setAttribute('onclick',downMoreButtonTime);
