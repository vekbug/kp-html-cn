$(function(){
	//宽度自适应
	//px与rem单位换算为1px=0.01rem；
	var design_width=720;//设计稿尺寸
	function width_suit(width){
		var _width=$(window).width();
		var _rem=_width/width*100;
		$('html').css('font-size',_rem+'px')
	}
	width_suit(design_width);
	$(window).resize(function(){
		width_suit(design_width);
	})
//	闪烁灯光效果
	var i=0
	var timer=setInterval(function(){
		$('.download_btn_img').attr('src','img/light'+i%2+'.png');
		$('.ani_second_download').attr('src','img/ani_second_light'+i%2+'.png');
		$('.ani_third_download').attr('src','img/light'+i%2+'.png');
		i++;
	},250)
//波浪效果
	var a=0;
	var timer=setInterval(function(){
		$('.spray').css('left',a+'rem')
		if(a<-11.28){
			a=0;
		}else{
			a=a-0.02;
		}
	},20)

})
//简单放大缩小
//classname表示需要变换的类名
//begin_scale:动画开始时的大小比例如 0 1 3 (1是100%)
//end_scale:动画结束时的大小比例如 0 1 3 (1是100%)
//speed 动画持续时间如1000;
//loop 如果为重头开始循环则填写数字表示多久后开始重新循环如10000 若为重复抖动则写"shake",什么都不干写"no_way"
//excited 表示运动缓动过程 布尔型 需要为true 不需要为false
 function scale(classname,begin_scale,end_scale,speed,loop,excited){
 	 var _width=$('.'+classname).width()/100/$(window).width()*750;
 	 var _height=$('.'+classname).height()/100/$(window).width()*750;
 	 var _begin_width=_width*begin_scale;
 	 var _begin_height=_height*begin_scale;
 	 var _end_width=_width*end_scale;
 	 var _end_height=_height*end_scale;
 	 //设置到初始状态
 	 $('.'+classname).css({'display':'inline-block',
					 	 'width':_width*begin_scale+'rem',
					 	 'height':_height*begin_scale+'rem'});
	_excited(classname,_end_width,_end_height,speed,loop,excited,_width,_height);

 }
//设置缓动函数
 function _excited(classname,_end_width,_end_height,speed,loop,excited,_begin_width,_begin_height){
 	if(excited){
			$('.'+classname).animate({'width':_end_width*1.04+'rem',
					 	 		'height':_end_height*1.04+'rem'},speed,'swing');
			$('.'+classname).animate({'width':_end_width*0.97+'rem',
					 	 		'height':_end_height*0.97+'rem'},'fast','swing');	
			$('.'+classname).animate({'width':_end_width*1.02+'rem',
					 	 		'height':_end_height*1.02+'rem'},'fast','swing');
			$('.'+classname).animate({'width':_end_width*0.99+'rem',
					 	 		'height':_end_height*0.99+'rem'},'fast','swing');
			$('.'+classname).animate({'width':_end_width*1.005+'rem',
					 	 		'height':_end_height*1.005+'rem'},'fast','swing');
			$('.'+classname).animate({'width':_end_width+'rem',
					 	 		'height':_end_height+'rem'},'fast','swing', looper(classname,_begin_width,_begin_height,speed,loop,excited,_end_width,_end_height));
	}else{
		    alert(222);
			$('.'+classname).animate({'width':_end_width+'rem',
					 	 		'height':_end_height+'rem'},speed,'swing',looper(classname,_begin_width,_begin_height,speed,loop,excited,_end_width,_end_height));
	}
 }
 //循环判定
 function looper(classname,_begin_width,_begin_height,speed,loop,excited,_end_width,_end_height){
   	if(isNaN(loop)){
   		if(loop=='shake'){
   			setTimeout(function(){
   			_excited(classname,_end_width,_end_height,speed,loop,excited,_begin_width,_begin_height);
   			},2500)
   		}else{
   			return false;
   		}
   		
   	}else if(!isNaN(loop)){
   		setTimeout(function(){
   			$('.'+classname).css({'width':_begin_height+'rem',
					 	 'height':_begin_height+'rem'});
   			_excited(classname,begin_scale,end_scale,speed,loop,excited,_width,_height);
   		},loop)
   	}
 }
 $('#test').animate({  borderSpacing: -90 }, {    step: function(now,fx) {
     $(this).css('-webkit-transform','rotate('+now+'deg)');      
$(this).css('-moz-transform','rotate('+now+'deg)');      
$(this).css('-ms-transform','rotate('+now+'deg)');
     $(this).css('-o-transform','rotate('+now+'deg)');      
$(this).css('transform','rotate('+now+'deg)');      },
   duration:'slow' },'linear');
 //简单旋转效果
 function rotation(classname,rotate_angle,excited,loop,rotate_type){
 	$('.'+classname).animate({},function(){
 		var i=0;
	 	var a=1;
 		var timer=setInterval(function(){
	 		if(i>=rotate_angle){
	 			a=-1;
	 		}else if(i<=-rotate_angle){
	 			a=1;
	 		}
	 		i+=a;
	 		$('.'+classname).css({
	 			'-webkit-transform':'rotate('+i+'deg)',
	 			'-moz-transform':'rotate('+i+'deg)',
	 			'-ms-transform':'rotate('+i+'deg)',
	 			'-o-transform':'rotate('+i+'deg)',
	 			'transform':'rotate('+i+'deg)'
	 		})
 		},70)
 	})
 }
//移动端图片轮播
	var  rotate_time;
function rotate_img(classname,width,type){
	if(type=="normal"){
		 rotate_time=setInterval(function(){
			var _length=$('.'+classname).find('li').length;
			var _index=$('.current_img').index();
			$('.'+classname).find('li').eq((_index+1)%_length).addClass('current_img').siblings().removeClass('current_img');
			$('.'+classname).find('ul').css({'left':-_index%_length*width+'rem'});
			$('.dot').find('i').eq((_index)%_length).addClass('current_dot').siblings().removeClass('current_dot');
		},1500)		
	}else if(type=="right"){
			var _length=$('.'+classname).find('li').length;
			var _index=$('.current_img').index();
			var _now_index=_index-1;
			if(_now_index<0){
				return false;
			}else{
				clearInterval(rotate_time);
				$('.'+classname).find('li').eq((_now_index)%_length).addClass('current_img').siblings().removeClass('current_img');
				$('.'+classname).find('ul').css({'left':-_now_index%_length*width+'rem'});
				$('.dot').find('i').eq((_now_index)%_length).addClass('current_dot').siblings().removeClass('current_dot');
				rotate_img(classname,width,"normal");
			}
	}else if(type=="left"){
		var _length=$('.'+classname).find('li').length;
			var _index=$('.current_img').index();
			var _now_index=_index+1;
			if(_now_index>_length-1){
				return false;
			}else{
				clearInterval(rotate_time);
				$('.'+classname).find('li').eq((_now_index)%_length).addClass('current_img').siblings().removeClass('current_img');
				$('.'+classname).find('ul').css({'left':-_now_index%_length*width+'rem'});
				$('.dot').find('i').eq((_now_index)%_length).addClass('current_dot').siblings().removeClass('current_dot');
				rotate_img(classname,width,'normal');
			}
	}
	}