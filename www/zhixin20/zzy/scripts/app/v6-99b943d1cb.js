"use strict";define(["util","appinfo","track"],function(t,n,e){var o=new URLSearchParams(location.search),l=t.isWechat(),i=o.get("chid").toLowerCase().replace(/s.*-/g,"")||window.__default_chid,a=o.get("pkg")||"7",d=n.package_infos[a],g=void 0;i&&/^\d+$/.test(i)||alert("缺少chid参数");var c={zzy:i};function r(){if(!$.os.android)return $.os.ios?(_hmt.push(["_trackEvent","download","ios"]),void(window.top.location.href=d.url)):void alert("只支持 Android 和 iOS 设备！");l?g.show():(_hmt.push(["_trackEvent","download","android"]),n.fetch(i,function(o){var t,n;console.log("Loading iframe: "+o.download_url),t=o.download_url,n=document.createElement("iframe"),$(n).css({width:0,height:0,position:"absolute",left:"-5000px"}),n.onload=function(){document.body.removeChild(n)},n.src=t,document.body.appendChild(n)}))}return{init:function(){n.fetch(i),e.required()&&(c=e.params(i),e.post(c)),new ClipboardJS(".js-download",{text:function(){return t.format(c)}}),$(document).on("tap",".js-download",function(){r()}),$(document).on("tap","#masker",function(){g.hide()});var o={title:null,logo_top:null,logo_bottom:null};$.os.ios&&(o.logo_top="https://qcdn-legacy.zhangzhongyun.com/logo-vest-bag-black-new.png",o.logo_bottom="https://qcdn-legacy.zhangzhongyun.com/logo-vest-bag-white.png",d&&(o.title=d.name),d&&d.v2&&(o.logo_top=d.v2.logo_top,o.logo_bottom=d.v2.logo_bottom)),window.__pageinfo&&(o.title=window.__pageinfo.title||o.title,o.logo_top=window.__pageinfo.logo_top||o.logo_top,o.logo_bottom=window.__pageinfo.logo_bottom||o.logo_bottom),o.title&&(document.title=o.title),o.logo_top&&$(".logo").css("background-image","url('"+o.logo_top+"')"),o.logo_bottom&&$(".bot-logo").css("background-image","url('"+o.logo_bottom+"')"),r()}}});