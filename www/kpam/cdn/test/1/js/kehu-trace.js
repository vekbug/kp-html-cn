"use strict";var extendStatics=function(t,e){return(extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)};function __extends(t,e){function n(){this.constructor=t}extendStatics(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}try{Object.keys||(Object.keys=function(){var i=Object.prototype.hasOwnProperty,r=!{toString:null}.propertyIsEnumerable("toString"),c=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"],a=c.length;return function(t){if("object"!=typeof t&&"function"!=typeof t||null===t)throw new TypeError("Object.keys called on non-object");var e=[];for(var n in t)i.call(t,n)&&e.push(n);if(r)for(var o=0;o<a;o++)i.call(t,c[o])&&e.push(c[o]);return e}}()),Object.assign||Object.defineProperty(Object,"assign",{enumerable:!1,configurable:!0,writable:!0,value:function(t,e){if(null==t)throw new TypeError("Cannot convert first argument to object");for(var n=Object(t),o=1;o<arguments.length;o++){var i=arguments[o];if(null!=i)for(var r=Object.keys(Object(i)),c=0,a=r.length;c<a;c++){var s=r[c],d=Object.getOwnPropertyDescriptor(i,s);void 0!==d&&d.enumerable&&(n[s]=i[s])}}return n}})}catch(t){var img=new Image;img.src="//ddd.1sapp.com/report?topic=log_cpc_trace&cmd=40001&type=polyfil&message=polyfil_error&isStack=true&stack="+t.stack}var getQueryString=function(t){void 0===t&&(t=window.location.href);var e={},n=[],o="",i="",r=t.substring(t.indexOf("?")+1,t.length).split("&");for(var c in r)o=(n=r[c].split("="))[0]||"",-1<(i=n[1]||"").indexOf("#")?e[o]=decodeURIComponent(i.split("#")[0]):e[o]=decodeURIComponent(i);return e},_getCpcSDKVersion=function(){var t="";if(window.cpcAndroid)try{(t=window.cpcAndroid.fetchInfo("getCpcSDKVersion"))&&"1.825-rc1"!=t&&(t=t.split("-")[0])}catch(t){}return t},getCpcSDKVersion=function(){var t="";if(window.cpcAndroid)try{t=(t=window.cpcAndroid.fetchInfo("getCpcSDKVersion"))&&t}catch(t){}return t},getClickTime=function(){var t=0;if(window.cpcAndroid)try{var e=window.cpcAndroid.fetchInfo(JSON.stringify({method:"getClickTime"}));e&&(t=e)}catch(t){}return t},getImei=function(){var t="";if(window.cpcAndroid)try{t=window.cpcAndroid.fetchInfo("imei")}catch(t){}return t},getX5=function(){var t=!1;try{0<=(window.navigator.userAgent||"").indexOf("qu_app_x5_kernel")&&(t=!0)}catch(t){}return t},isPreloadHtml=function(t){void 0===t&&(t=window.location.href);var e="none";if(window.cpcAndroid)try{e=window.cpcAndroid.fetchInfo(JSON.stringify({method:"isPreloadHtml",targetUrl:t}))}catch(t){}return e},getSdkInfo=function(){var t={};if(window.cpcAndroid){t.memberId=window.cpcAndroid.fetchInfo("getMemberid"),t.token=window.cpcAndroid.fetchInfo("getToken"),t.tkid=window.cpcAndroid.fetchInfo("tkid"),t.tuid=window.cpcAndroid.fetchInfo("tuid"),t.imei=window.cpcAndroid.fetchInfo("imei");var e=window.cpcAndroid.fetchInfo("getUserInfo");t.userInfo=JSON.parse(e)}return t},setSessionStorage=function(t,e){sessionStorage.setItem(t,e)},getSessionStorage=function(t){return sessionStorage.getItem(t)},device_detect=function(t,e){void 0===t&&(t=window.navigator.userAgent),void 0===e&&(e=window.navigator.platform);var n={},o={},i=t.match(/Web[kK]it[\/]{0,1}([\d.]+)/),r=t.match(/(Android);?[\s\/]+([\d.]+)?/),c=!!t.match(/\(Macintosh\; Intel /),a=t.match(/(iPad).*OS\s([\d_]+)/),s=t.match(/(iPod)(.*OS\s([\d_]+))?/),d=!a&&t.match(/(iPhone\sOS)\s([\d_]+)/),l=t.match(/(webOS|hpwOS)[\s\/]([\d.]+)/),p=/Win\d{2}|Windows/.test(e),u=t.match(/Windows Phone ([\d.]+)/),h=l&&t.match(/TouchPad/),f=t.match(/Kindle\/([\d.]+)/),g=t.match(/Silk\/([\d._]+)/),m=t.match(/(BlackBerry).*Version\/([\d.]+)/),v=t.match(/(BB10).*Version\/([\d.]+)/),b=t.match(/(RIM\sTablet\sOS)\s([\d.]+)/),y=t.match(/PlayBook/),w=t.match(/Chrome\/([\d.]+)/)||t.match(/CriOS\/([\d.]+)/),_=t.match(/Firefox\/([\d.]+)/),S=t.match(/\((?:Mobile|Tablet); rv:([\d.]+)\).*Firefox\/[\d.]+/),k=t.match(/MSIE\s([\d.]+)/)||t.match(/Trident\/[\d](?=[^\?]+).*rv:([0-9.].)/),I=!w&&t.match(/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/),x=t.match(/MicroMessenger/i),T=t.match(/UCBrowser/i),C=t.match(/QQ\//i),O=t.match(/MiuiBrowser\//i),A=t.match(/baiduboxapp\//i),D=I||t.match(/Version\/([\d.]+)([^S](Safari)|[^M]*(Mobile)[^S]*(Safari))/);return(o.webkit=!!i)&&(o.version=i[1]),r&&(n.android=!0,n.version=r[2]),d&&!s&&(n.ios=n.iphone=!0,n.version=d[2].replace(/_/g,".")),a&&(n.ios=n.ipad=!0,n.version=a[2].replace(/_/g,".")),s&&(n.ios=n.ipod=!0,n.version=s[3]?s[3].replace(/_/g,"."):null),u&&(n.wp=!0,n.version=u[1]),l&&(n.webos=!0,n.version=l[2]),h&&(n.touchpad=!0),m&&(n.blackberry=!0,n.version=m[2]),v&&(n.bb10=!0,n.version=v[2]),b&&(n.rimtabletos=!0,n.version=b[2]),y&&(o.playbook=!0),f&&(n.kindle=!0,n.version=f[1]),g&&(o.silk=!0,o.version=g[1]),!g&&n.android&&t.match(/Kindle Fire/)&&(o.silk=!0),w&&(o.chrome=!0,o.version=w[1]),_&&(o.firefox=!0,o.version=_[1]),S&&(n.firefoxos=!0,n.version=S[1]),k&&(o.ie=!0,o.version=k[1]),D&&(c||n.ios||p)&&(o.safari=!0,n.ios||(o.version=D[1])),I&&(o.webview=!0),x&&(o.weixin=!0),C&&(o.QQ=!0),T&&(o.UC=!0),O&&(o.MI=!0),A&&(o.BaiduBox=!0),n.tablet=!!(a||y||r&&!t.match(/Mobile/)||_&&t.match(/Tablet/)||k&&!t.match(/Phone/)&&t.match(/Touch/)),n.phone=!(n.tablet||n.ipod||!(r||d||l||m||v||w&&t.match(/Android/)||w&&t.match(/CriOS\/([\d.]+)/)||_&&t.match(/Mobile/)||k&&t.match(/Touch/))),n.version=n.version||"0.0",n.PC=/win/i.test(e)||/Mac/.test(e),n.PC&&(n.MAC=/Mac/.test(e),n.WIN=/win/i.test(e)),n},InitParams=function(){function t(t,e){this.query=t,this.init_trace_time=e}return t.prototype.setQueryInSession=function(){this.query.qtt_env&&setSessionStorage("qtt_env",this.query.qtt_env),this.query.iclicashsid&&setSessionStorage("iclicashsid",this.query.iclicashsid),this.query.icliideaid&&setSessionStorage("iclicashsid",this.query.icliideaid)},t.prototype.default_params=function(){var t=device_detect();this.setQueryInSession();var e=getClickTime(),n=0;return e&&(n=this.init_trace_time-e),{iclicashsid:this.query.iclicashsid||getSessionStorage("iclicashsid")||"none",opt_ideaid:this.query.icliideaid||getSessionStorage("icliideaid")||"none",qtt_env:this.query.qtt_env||getSessionStorage("qtt_env")||"none",opt_sdk_version:getCpcSDKVersion(),opt_preload:isPreloadHtml(),opt_click_time:e,opt_click_to_init:n,w:document.body&&document.body.scrollWidth,h:document.body&&document.body.scrollHeight,sw:window.screen.availWidth,sh:window.screen.availHeight,os:t.MAC?"MAC":t.WIN?"WIN":t.PC?"pc":t.android?"Android":t.ios?"iOS":"other",v:t.version,auto:"0",opt_imei:getImei(),opt_x5:getX5(),opt_ua:window.navigator.userAgent,ref:document.referrer}},t}(),protocol="http:";document.location.protocol&&(protocol=document.location.protocol);var base_url=protocol+"//rcv.aiclk.com/trace",ab_url=protocol+"//qa3-adv.qttcs.cn/tools/callback/conversion-code-check";ab_url=protocol+"//adv.aiclk.com/tools/callback/conversion-code-check";var LogServer=function(){function t(){}return t.prototype.send=function(t,e,n){var o="",i=!1;n&&n.stack&&(o=n.stack,i=!0);var r=new Image;r.onload=this.onload,r.onerror=this.onerror,r.src="//ddd.1sapp.com/report?topic=log_cpc_trace&cmd=40001&type="+t+"&message="+e+"&stack="+o+"&isStack="+i},t.prototype.trace_error=function(t,e){this.send("trace_error",t,e)},t.prototype.site_error=function(t,e){this.send("site_error",t,e)},t.prototype.onload=function(){},t.prototype.onerror=function(){},t}(),log=new LogServer,SendTrace=function(){function t(t,e,n){this._query=t,this._init_trace_time=e,this.default_params=n,this._sdk_version=_getCpcSDKVersion(),this.sendType=""}return t.prototype.sendTrace=function(t){void 0===t&&(t={}),this.sendType="h5";try{if(this._sdk_version&&"1.825"<=this._sdk_version)for(var e=[],n=0;n<e.length;n++)t.t==e[n]&&(this.sendType="sdk");var o=(new Date).getTime(),i=this.paramsToString(Object.assign(t,{timestamp:o,_t:Math.floor((o-this._init_trace_time)/1e3),opt_t_ms:o-this._init_trace_time,qtt_env:this._query.qtt_env||"none"},this.default_params)),r=base_url+"?"+i;(this._query.qtt_env||getSessionStorage("qtt_env"))&&(r=ab_url+"?"+i),"sdk"==this.sendType?this.sendSDKTrace(r):this.sendImageTrace(r)}catch(t){log.trace_error("trace_send_trace_error",t)}},t.prototype.sendImageTrace=function(t){var e=new Image;e.onerror=this.onerror,e.src=t},t.prototype.sendSDKTrace=function(e){if(window.cpcAndroid)try{1!=window.cpcAndroid.fetchInfo(JSON.stringify({method:"excuteUrl",targetUrl:e}))&&this.sendImageTrace(e)}catch(t){this.sendImageTrace(e)}else this.sendImageTrace(e)},t.prototype.paramsToString=function(n){try{var o="";return Object.keys(n).forEach(function(t,e){o+=0==e?t+"="+encodeURIComponent(n[t]):"&"+t+"="+encodeURIComponent(n[t])}),o}catch(t){return log.trace_error("trace_params_to_string_error",t),""}},t.prototype.onerror=function(){},t}(),AddEvent=function(){function t(t){this.trace=t,this.domRead(),this.listenerClick(),this.listenerLoad()}return t.prototype.listenerClick=function(){var e=this,n=document.documentElement.clientHeight||document.body&&document.body.clientHeight;document.addEventListener("touchstart",function(t){e.sendClickMonitor(t.touches[0].pageX,t.touches[0].pageY,t.touches[0].clientX,t.touches[0].clientY,n)})},t.prototype.sendClickMonitor=function(t,e,n,o,i){this.trace.sendTrace({t:"clickMonitor",opt_first_screen:!(0<e-i),px:t,py:e,x:n,y:o})},t.prototype.listenerLoad=function(){var e=this;window.addEventListener("load",function(t){e.trace.sendTrace({t:"load"})})},t.prototype.domRead=function(){var t=this;document.addEventListener("DOMContentLoaded",function(){t.trace.sendTrace({t:"ctsite_dom_read"})},!1)},t}(),StayEvent=function(){function t(t){this.trace=t,this.stayDurationTrace()}return t.prototype.stayDurationTrace=function(){var t=this,e=[1,5,10,30,60,120],n=setInterval(function(){(new Date).getTime()-t.trace.init_trace_time>=1e3*e[0]&&(t.trace.sendTrace({t:"stay",duration:e[0],p:t.getScrollTop()}),e.shift(),e.length<1&&clearInterval(n))},1e3)},t.prototype.getScrollTop=function(){var t=0,e=0;return document.body&&(t=document.body.scrollTop),document.documentElement&&(e=document.documentElement.scrollTop),0<t-e?t:e},t}(),Debug=function(){function t(){var t=this;this.count=1,window.addEventListener("load",function(){t.init()})}return t.prototype.init=function(){var t=document.createElement("div");t.innerHTML=".",t.style.color="#fff",t.style.zIndex="10002",t.style.position="fixed",t.style.bottom="0",t.style.width="10px",t.style.height="10px",t.style.left="0px",t.id="debug",document.body.appendChild(t),t.onclick=this.openDebug.bind(this),window.clearLocalStorage=this.clearLocalStorage.bind(this),window.openConsole=this.openConsole.bind(this),window.clearDebug=this.clearDebug.bind(this),window.getUrl=this.getUrl.bind(this),window.getUa=this.getUa.bind(this),window.showSdkInfo=this.showSdkInfo.bind(this)},t.prototype.openDebug=function(){if(this.count++,!(this.count<10)){var t=document.createElement("style");t.innerHTML="\n     .debugBtn> button{\n      min-width: 60px;\n      height: 30px;\n      padding: 0 8px;\n      font-size: 12px;\n      line-height: 28px;\n      color: #fff;\n      background-color: #1989fa;\n      border: 1px solid #1989fa;\n      position: relative;\n      display: inline-block;\n      box-sizing: border-box;\n      text-align: center;\n      border-radius: 2px;\n      margin-bottom:5px;\n     }\n    ",document.body.appendChild(t);var e=document.createElement("div");e.innerHTML="\n    <div style= \"\n    position: fixed;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    background: rgba(0,0,0,0.4);\">\n      <div style= \"\n    width: 300px;\n    height: 300px;\n    position: absolute;\n    left: 50%;\n    top: 50%;\n    margin-left: -150px;\n    margin-top: -150px;\n    background: #fff;\n    border-radius: 10px;\n    font-size: 12px;\n    padding: 5px;\n    box-sizing: border-box;\n    \">\n      <div class=\"debugBtn\">\n      <button onclick='clearLocalStorage()'>清理缓存</button>\n      <button onclick='clearDebug()'>关闭调试</button>\n      <button onclick='openConsole()'>打开console</button>\n      <button onclick='getUrl()'>获取页面url</button>\n      <button onclick='getUa()'>是否x5内核</button>\n      <button onclick='showSdkInfo()'>获取sdk桥接信息</button>\n      </div>\n      <div id='debugContent' style= \"\n      word-wrap: break-word;\n      padding: 5px;\n      color: #E91E63;\"\n      ></div>\n      </div>\n      </div>\n    ",e.id="box",document.body.appendChild(e)}},t.prototype.clearLocalStorage=function(){window.localStorage.clear(),this.setDebugContent("清理成功")},t.prototype.clearDebug=function(){var t=document.getElementById("box");t&&t.remove()},t.prototype.openConsole=function(){this.setJs("//cdn.bootcss.com/vConsole/3.3.0/vconsole.min.js"),this.setDebugContent("打开成功")},t.prototype.setJs=function(t){var e=document.createElement("script");e.type="text/javascript",e.src=t,e.onload=function(){new VConsole},document.body.appendChild(e)},t.prototype.getUrl=function(){this.setDebugContent(window.location.href)},t.prototype.setDebugContent=function(t){var e=document.getElementById("debugContent");e&&(e.innerHTML=t)},t.prototype.getUa=function(){var t=String(getX5());this.setDebugContent(t)},t.prototype.showSdkInfo=function(){this.setDebugContent(JSON.stringify(getSdkInfo()))},t}(),Trace=function(i){function t(){var t=this,e=getQueryString();console.log(e);var n=(new Date).getTime(),o=new InitParams(e,n).default_params();return(t=i.call(this,e,n,o)||this).init_trace_time=n,t.init(),t}return __extends(t,i),t.prototype.init=function(){this.sendBeforeLoad();try{new AddEvent(this),new StayEvent(this),new Debug}catch(t){}},t.prototype.sendBeforeLoad=function(){this.sendTrace({t:"beforeload-kehu"})},t}(SendTrace),trace=new Trace;window.sendTrace=trace.sendTrace.bind(trace);
//# sourceMappingURL=kehu-trace.js.map
