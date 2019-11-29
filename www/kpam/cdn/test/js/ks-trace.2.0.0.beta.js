var _ks_trace=function(){"use strict";var a=function(){return(a=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};function r(a,i,c,u){return new(c||(c=Promise))(function(e,t){function n(e){try{o(u.next(e))}catch(e){t(e)}}function r(e){try{o(u.throw(e))}catch(e){t(e)}}function o(t){t.done?e(t.value):new c(function(e){e(t.value)}).then(n,r)}o((u=u.apply(a,i||[])).next())})}function o(n,r){var o,a,i,e,c={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return e={next:t(0),throw:t(1),return:t(2)},"function"==typeof Symbol&&(e[Symbol.iterator]=function(){return this}),e;function t(t){return function(e){return function(t){if(o)throw new TypeError("Generator is already executing.");for(;c;)try{if(o=1,a&&(i=2&t[0]?a.return:t[0]?a.throw||((i=a.return)&&i.call(a),0):a.next)&&!(i=i.call(a,t[1])).done)return i;switch(a=0,i&&(t=[2&t[0],i.value]),t[0]){case 0:case 1:i=t;break;case 4:return c.label++,{value:t[1],done:!1};case 5:c.label++,a=t[1],t=[0];continue;case 7:t=c.ops.pop(),c.trys.pop();continue;default:if(!(i=0<(i=c.trys).length&&i[i.length-1])&&(6===t[0]||2===t[0])){c=0;continue}if(3===t[0]&&(!i||t[1]>i[0]&&t[1]<i[3])){c.label=t[1];break}if(6===t[0]&&c.label<i[1]){c.label=i[1],i=t;break}if(i&&c.label<i[2]){c.label=i[2],c.ops.push(t);break}i[2]&&c.ops.pop(),c.trys.pop();continue}t=r.call(n,c)}catch(e){t=[6,e],a=0}finally{o=i=0}if(5&t[0])throw t[1];return{value:t[0]?t[1]:void 0,done:!0}}([t,e])}}}var i,e,c,t,u={form:9,load:17,loadDone:18,error:19};(e=i||(i={}))[e.UNKNOWN=0]="UNKNOWN",e[e.PAGE_NO_XPATH=1]="PAGE_NO_XPATH",e[e.XPATH_ELEMENT_NOT_FOUND=2]="XPATH_ELEMENT_NOT_FOUND",(t=c||(c={}))[t.JS=1]="JS",t[t.XPATH=2]="XPATH";Boolean(window.navigator&&window.navigator.sendBeacon),document.hidden;var n=function(e){localStorage.removeItem(e)},s=function(e,t){sessionStorage.setItem(e,JSON.stringify(t))},p=function(e){try{var t=sessionStorage.getItem(e);return t?JSON.parse(t):null}catch(e){return null}},l=function(e){var t=new RegExp("(^|&)"+e+"=([^&|#]*)(&|#|$)"),n=-1<window.location.href.indexOf("?")?window.location.href.split("?")[1].match(t):null;return null!=n?decodeURIComponent(n[2]):null},v=new(function(){function r(){this.init()}return r.prototype.push=function(e){var n=this,r=e.event,o=e.convertId,t=e.cb,a=e.convertType,i=e.errorEventType;new Promise(function(e,t){if(!u[r])throw new Error("event is not valid, please check your event parameter");n.sendEvent(u[r],o,e,a,i)}).then(function(){t&&t()}).catch(function(e){console.log(e),t&&t()})},r.prototype.init=function(){this.callback=this.getParam("callback"),l("callback")?n("uniqueKey"):this.uniqueKey=this.getParam("uniqueKey")},r.prototype.getParam=function(e){var t=l(e);return t?(s(e,t),t):p(e)},r.prototype.send=function(e){this.uniqueKey?this.sendCheck(e):this.sendLog(e)},r.prototype.sendLog=function(t){if(this.callback){var e=r.url+"?"+Object.keys(t).filter(function(e){if("resolve"!==e)return t[e]}).map(function(e){return"object"==typeof t[e]&&(t[e]=JSON.stringify(t[e])),e+"="+t[e]}).join("&"),n=new XMLHttpRequest;n.open("GET",e,!0),n.send(null),n.addEventListener("readystatechange",function(){4===n.readyState&&t.resolve&&t.resolve()})}else t.resolve&&t.resolve()},r.prototype.sendCheck=function(e){var t=r.check_url,n=new XMLHttpRequest;n.open("POST",t,!0),n.setRequestHeader("Content-type","application/x-www-form-urlencoded"),n.send("eventType="+e.eventType+"&convertId="+e.convertId+"&uniqueKey="+this.uniqueKey)},r.prototype.sendEvent=function(e,t,n,r,o){void 0===r&&(r=c.JS),this.send(a({eventType:e,convertId:t,resolve:n,convertType:r,errorEventType:o},this.generateParams()))},r.prototype.generateParams=function(){return{callback:this.callback,eventTime:Date.now()}},r.url="https://e.kuaishou.com/rest/log/activate",r.check_url="https://ad.e.kuaishou.com/ads/js-convert-check/activate",r}());return(new(function(){function e(){this.xpath_url="https://api.e.kuaishou.com/rest/config/client/v1/open/xpathInfo",this.convert_type=l("ks_convert_type")}return e.prototype.init=function(){var e=this;v.push({event:"load",convertId:0,convertType:"xpath"===this.convert_type?c.XPATH:c.JS}),"complete"===document.readyState?this.pageLoadDone():document.addEventListener("readystatechange",function(){"complete"===document.readyState&&e.pageLoadDone()})},e.prototype.pageLoadDone=function(){"xpath"===this.convert_type&&l("callback")&&this.getXpath(),v.push({event:"loadDone",convertId:0,convertType:"xpath"===this.convert_type?c.XPATH:c.JS})},e.prototype.getXpath=function(){return r(this,void 0,void 0,function(){var t,n,r=this;return o(this,function(e){return t=this.xpath_url,(n=new XMLHttpRequest).open("POST",t,!0),n.setRequestHeader("content-type","application/json"),n.send(JSON.stringify({callback:l("callback")})),n.addEventListener("readystatechange",function(){if(4===n.readyState&&200==n.status){var e=JSON.parse(n.responseText).data.xpath[0].elements,t=JSON.parse(n.responseText).data.convert_id;0===e.length?v.push({event:"error",convertId:0,convertType:c.XPATH,errorEventType:i.PAGE_NO_XPATH}):r.bindEvents(["#div1","#div2"],t)}}),[2]})})},e.prototype.bindEvents=function(t,n){return r(this,void 0,void 0,function(){return o(this,function(e){return t.forEach(function(e){var t=document.querySelector(e);t?t.addEventListener("click",function(){v.push({event:"form",convertId:n,convertType:c.XPATH})},!0):v.push({event:"error",convertId:n,convertType:c.XPATH,errorEventType:i.XPATH_ELEMENT_NOT_FOUND})}),[2]})})},e}())).init(),v}();