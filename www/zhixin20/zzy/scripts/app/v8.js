"use strict";define(["knockout"],function(o){var t=new URLSearchParams(location.search).get("id"),r="#";function s(){r&&"#"!==r&&(window.top.location.href=r)}return{init:function(){var e;e=t,$.ajax({url:"https://sem-api.zhangzhongyun.com/api/tpl/getinfobyid?id="+e,dataType:"jsonp",success:function(e){if(0===e.code){var t=e.data;document.title=t.mp_name||"掌中云",r=t.wxlink,"2"===t.status?(o.components.register("container",{template:{element:"reviewing-template"}}),o.applyBindings()):(a=(i=t).display_article_count||2,n=i.novel_id,$.ajax({url:"https://api.818tu.com/v1/jsonp/bidding?articles="+a+"&latest_entry=0&id="+n,dataType:"jsonp",success:function(e){if(e.error)alert(e.error);else{var t=e.data.novel,a=e.data.articles,n=t.summary.split("\n").map(function(e){var t=e.replace(/^[\s　]+/g,"");return t?'<p class="paragraph">'+t+"</p>":""}).join(""),r=a.map(function(e){var t=e.content.split("\n"),a=t.map(function(e){var t=e.replace(/^[\s　]+/g,"");return t?'<p class="paragraph">'+t+"</p>":""});return{section:a.join("")}});o.components.register("container",{viewModel:function(){var e;this.time=o.observable((e=new Date).getFullYear()+"年"+(e.getMonth()+1)+"月"+e.getDate()+"日"),this.readcount=o.observable(386+Math.floor(50*Math.random())),this.dianzan=o.observable((86+Math.floor(20*Math.random()))/10),this.comments=o.observable((36+Math.floor(20*Math.random()))/10),this.title=o.observable(i.title),this.banner=o.observable(i.banner),this.imgUrl=o.observable("https://open.weixin.qq.com/qr/code?username="+i.mp_raw_id),this.copyright=o.observable(i.copyright),this.isPC=o.observable(!$.os.phone),this.isMobile=o.observable($.os.phone),this.summary=n,this.articles=r,this.continueRead=s},template:{element:"normal-template"}}),o.applyBindings()}},error:function(){alert("发生错误")}}))}else alert("找不到该推广数据");var i,a,n},error:function(){alert("发生错误")}})}}});