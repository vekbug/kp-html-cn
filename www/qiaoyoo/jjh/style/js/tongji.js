
var dfparm='31_1_1_1_1';  
var lochost='https://by.wh8s.com/';
var tongjiver='20180820';
function gqs(name){var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");var r = window.location.search.substr(1).match(reg);if(r!=null)return  unescape(r[2]); return null; }
function getCookie(name)
{
var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
if(arr=document.cookie.match(reg))
return unescape(arr[2]);
else
return null;
}
function setCookie(name,value,time)
{
var strsec = getsec(time);
var exp = new Date();
exp.setTime(exp.getTime() + strsec*1);
document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString();
}
function getsec(str)
{
	var str1=str.substring(1,str.length)*1;
	var str2=str.substring(0,1);
	if (str2=="s")
	{
	return str1*1000;
	}
	if (str2=="m")
	{
	return str1*60;
	}
	else if (str2=="h")
	{
	return str1*60*60*1000;
	}
	else if (str2=="d")
	{
	return str1*24*60*60*1000;
	}
}
  if(gqs('hmsr')==null){
	
  }else{
		//初始化
		setCookie('hmsr',gqs('hmsr'),'1800s');	
		setCookie('hmpl',gqs('hmpl'),'1800s');	
		setCookie('hmcu',gqs('hmcu'),'1800s');	
		setCookie('hmkw',gqs('hmkw'),'1800s');	
		setCookie('hmci',gqs('hmci'),'1800s');	
  }
function getdfparm(){
	var parm=""; 
	if(getCookie('hmsr')==null){
			if(dfparm==undefined){
				
			}else {
				var parms=dfparm.split("_");
				if(parms.length==undefined){
					
				}else{
					if(parms.length==5){ 
						parm=dfparm;
					}
				
				}
			}
	}else{
		parm=(getCookie('hmsr'))+'_'+(getCookie('hmpl'))+'_'+(getCookie('hmcu'))+'_'+(getCookie('hmkw'))+'_'+(getCookie('hmci'));
	}
	return parm;
}  
function Down(obj){
	var parm=getdfparm();
	if(parm!="" && parm !=undefined){
		url=lochost+'jjhgame_'+parm+'.exe' ;
	}else{
		url=lochost+'jjhgame.exe';
	}
	countdown();
	//$.get();
	obj.attr("href", url);
}
function visit(){
   var protocol = (("https:" == document.location.protocol) ? "https://" : "https://");
	document.write(unescape("%3Cspan id='jjhtj_20170906'%3E%3C/span%3E%3Cscript src='" + protocol + "tongji.jjhgame.com/%3Fsh%3D" + window.screen.height + "%26sw%3D"+ window.screen.width+"%26data%3D"+ escape(encodeURIComponent(window.location.href))+"%26refer%3D"+escape(encodeURIComponent(document.referrer))+"%26time%3D"+(new Date(document.lastModified).getTime())+'%26ver%3D'+tongjiver+"' type='text/javascript'%3E%3C/script%3E"));  
}
//
function countdown(){
   countimg=document.createElement('img'); 
   counturl=(("https:" == document.location.protocol) ? "https://" : "https://")+"tongji.jjhgame.com/?sh=" + window.screen.height + "&sw="+ window.screen.width+"&action=down&data="+ escape(encodeURIComponent(window.location.href))+"&refer="+escape(encodeURIComponent(document.referrer))+"&time="+(new Date(document.lastModified).getTime())+'&ver='+tongjiver;
   countimg.src=counturl; 
}