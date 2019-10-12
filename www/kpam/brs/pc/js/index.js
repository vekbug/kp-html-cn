
 
               
           function chat() {  
              $(".like").stop(true,true).animate({"margin-left":"0px"});
              $(".cai_link").css("display","none"); 
              $(".like").css("background","#fafafa");
           }  

  $(function(){ 

   //猜你喜欢
    setInterval(chat, "30000"); 
    $(".like").stop(true,true).animate({"margin-left":"0px"}); 
    $(".close").click(function(){
    $(".like").stop(true,true).animate({"margin-left":"-1320px"});
    $(".cai_link").css("display","block");
    $(".like").css("background","none");
   // var ss=$(".like").attr("margin-left");
    //alert(ss)
   // if(ss=="-1320px") 
   // $(".cai_link").css("display","block");
   })
  
   $(".cai_link").click(function(){
    $(".like").stop(true,true).animate({"margin-left":"0px"}); 
    $(".cai_link").css("display","none");
    $(".like").css("background","#fafafa");
   })
  $(".uls li").hover(function(){
     $(this).find("ul").css("display","block");
  },function(){
    $(this).find("ul").css("display","none");
  })

   $(".right p").click(function(){
    $(".right").stop(true,true).animate({"right":"-130px"});
    $("#scool").css("display","block");
   });
   $("#scool").click(function(){
    $("#scool").css("display","none");
    $(".right").stop(true,true).animate({"right":"0px"});

   })





   
    /*返回顶部*/
   var sTop=0;
   $(".dh_btn").bind("click",function (){
     $("html,body").stop(true).animate({scrollTop:sTop+"px"},500);
   });
   $(window).scroll(function (){
     var sTop1=$(document).scrollTop();
    if(sTop1>=100){
      $(".zx_nav").show(); 
    }else{
      $(".zx_nav").hide(); 
    }


   })


    
  })  












