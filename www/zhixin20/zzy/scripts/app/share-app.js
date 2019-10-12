"use strict";define(["util","appinfo","knockout"],function(e,a,t){var o=new URLSearchParams(location.search),n=e.isWechat(),i=o.get("chid"),r=o.get("app_package_type"),s=e.getIosLink(),l=r?a.package_infos[r]:null;i||alert("Missing chid");var p=void 0,c=void 0,d={alias:t.observable(),avatar:t.observable(),title:t.observable("加载中..."),roles:t.observable("加载中..."),intro:t.observable("加载中..."),status:t.observable("加载中..."),tags:t.observableArray(),articles:t.observableArray(),last_entry_idx:t.observable(""),last_entry_title:t.observable("加载中...")};function u(e){var a=document.createElement("iframe");$(a).css({width:0,height:0,position:"absolute",left:"-5000px"}),a.onload=function(){document.body.removeChild(a)},a.src=e,document.body.appendChild(a)}function _(){if($.os.android)n?p.show():(_hmt.push(["_trackEvent","download","android",d.title()]),a.fetch(i,function(e){console.log("Loading iframe: "+e.download_url),u(e.download_url)}));else if($.os.ios)if(l){if(!l.url)return void alert("对不起，暂不支持iOS下载");window.top.location.href=l.url}else window.top.location.href=s;else a.fetch(i,function(e){console.log("Loading iframe: "+e.download_url),u(e.download_url)})}return console.log("PkgInfo",l),{init:function(){var n;p=$("#masker"),c=$(".btn-download"),a.fetch(i),t.applyBindings(d,document.body),n={ongoing:"连载中",completed:"已完结"},$.ajax({url:"https://api.818tu.com/v1/jsonp/bidding",data:{latest_entry:0,id:o.get("id"),title:o.get("title"),articles:parseInt(o.get("articles"))||3},dataType:"jsonp",success:function(e){if(e.error)alert(e.error);else{var a=e.data.novel,t=e.data.entry;d.title(a.title),d.roles(a.roles),d.intro(a.summary),d.status(n[a.status]),d.avatar(a.avatar),e.data.articles.forEach(function(e){var a=e.content.split("\n"),t={title:e.title,paras:[]};a.forEach(function(e){var a=e.replace(/^[\s　]+/g,"");a&&t.paras.push(a)}),d.articles.push(t)}),a.tags&&d.tags(a.tags.split(",")),t&&(d.last_entry_idx(t.idx),d.last_entry_title(t.title))}},error:function(){alert("发生错误")}}),$.os.ios&&c.each(function(){new ClipboardJS(this,{text:function(){return"zzy:"+i}})}),c.tap(_),p.tap(function(){return p.hide()}),$.os.ios&&l&&($(".logo").css("background-image",'url("'+l.logo+'")'),$(".js-app-name").html(l.name)),document.title=l?l.name:"掌中云",_zaq.push(["_trackEvent","7026cb34568a3b83f53949564e11238d",JSON.stringify({app_version:o.get("app_version"),app_channel:o.get("app_channel"),app_package_type:o.get("app_package_type")})]),$(".btn-add-shelf").tap(function(){_zaq.push(["_trackEvent","532824149be9d19175af2474b3fef3f0",JSON.stringify({app_version:o.get("app_version"),app_channel:o.get("app_channel"),app_package_type:o.get("app_package_type")})])}),$(".btn-open-app").tap(function(){_zaq.push(["_trackEvent","3acc7b10d57439dd95e4efa4055fee30",JSON.stringify({app_version:o.get("app_version"),app_channel:o.get("app_channel"),app_package_type:o.get("app_package_type")})])})}}});