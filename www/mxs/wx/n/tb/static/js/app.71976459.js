(function(t){function n(n){for(var i,a,c=n[0],s=n[1],u=n[2],p=0,f=[];p<c.length;p++)a=c[p],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&f.push(o[a][0]),o[a]=0;for(i in s)Object.prototype.hasOwnProperty.call(s,i)&&(t[i]=s[i]);l&&l(n);while(f.length)f.shift()();return r.push.apply(r,u||[]),e()}function e(){for(var t,n=0;n<r.length;n++){for(var e=r[n],i=!0,c=1;c<e.length;c++){var s=e[c];0!==o[s]&&(i=!1)}i&&(r.splice(n--,1),t=a(a.s=e[0]))}return t}var i={},o={app:0},r=[];function a(n){if(i[n])return i[n].exports;var e=i[n]={i:n,l:!1,exports:{}};return t[n].call(e.exports,e,e.exports,a),e.l=!0,e.exports}a.m=t,a.c=i,a.d=function(t,n,e){a.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,n){if(1&n&&(t=a(t)),8&n)return t;if(4&n&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(a.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var i in t)a.d(e,i,function(n){return t[n]}.bind(null,i));return e},a.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(n,"a",n),n},a.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},a.p="";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=n,c=c.slice();for(var u=0;u<c.length;u++)n(c[u]);var l=s;r.push([0,"chunk-vendors"]),e()})({0:function(t,n,e){t.exports=e("56d7")},"56d7":function(t,n,e){"use strict";e.r(n);e("cadf"),e("551c"),e("f751"),e("097d");var i=e("2b0e"),o=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"app"}},[e("v-home")],1)},r=[],a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"app"}},[e("div",[e("img",{staticClass:"image",attrs:{src:t.info.head_img}}),t._v(" "),e("div",[e("p",{staticClass:"content",domProps:{innerHTML:t._s(t.info.content)}})]),t._v(" "),e("div",{staticClass:"line"}),t._v(" "),e("img",{staticClass:"image",attrs:{src:t.info.guide_image1[0]}}),t._v(" "),e("div",{staticClass:"guanzhu"},[e("div",{staticClass:"box"},[e("img",{staticClass:"head",attrs:{src:t.info.weixin_img}}),t._v(" "),e("span",{staticClass:"weixin",attrs:{id:"weixin"}},[t._v(t._s(t.info.weixin))]),t._v(" "),e("button",{ref:"copy",attrs:{"data-clipboard-action":"copy","data-clipboard-target":"#weixin"},on:{click:t.copyLink}},[t._v("+关注")])])]),t._v(" "),e("img",{staticClass:"image",attrs:{src:t.info.guide_image1[1]}}),t._v(" "),e("img",{staticClass:"image",attrs:{src:t.info.guide_image2[0]}})])])},c=[],s=(e("6b54"),e("3b2b"),e("a481"),e("8237")),u=e.n(s);function l(t){return decodeURIComponent((new RegExp("[?|&]"+t+"=([^&;]+?)(&|#|;|$)").exec(location.href)||[,""])[1].replace(/\+/g,"%20"))||null}function p(t,n){var e="id="+t+"&timestamp="+n+"jk3s3012a20423i30jk223492034k23o";return u()(e)}var f={getUrlKey:l,sign:p},d=e("bc3a"),g={name:"app",data:function(){return{info:{title:"",content:"",weixin:"",guide_image1:["",""],guide_image2:[],head_img:""},copyBtn:null}},methods:{getData:function(t,n,e){var i=this,o="http://tui.kpam.com.cn/uc/info";o=o+"?id="+t+"&timestamp="+n+"&sign="+e,d.get(o).then((function(t){var n=t.data;console.log(n),0==n.errcode&&(i.info=n.data,""!=i.info.content&&(i.info.content=i.info.content.replace(new RegExp("\n","g"),"<br>")))})).then((function(t){}))},copyLink:function(){var t=this,n=t.copyBtn;n.on("success",(function(){console.log("success"),location.href="weixin://"})),n.on("error",(function(){console.log("error")}))}},mounted:function(){this.copyBtn=new this.clipboard(this.$refs.copy);var t=f.getUrlKey("id");null!=t&&""!=t||(t="21573");var n=(new Date).getTime().toString().substr(0,10),e=f.sign(t,n);this.getData(t,n,e)}},v=g,m=(e("8b71"),e("2877")),h=Object(m["a"])(v,a,c,!1,null,null,null),b=h.exports,_={name:"app",data:function(){return{}},methods:{},components:{"v-home":b},mounted:function(){}},y=_,w=Object(m["a"])(y,o,r,!1,null,null,null),x=w.exports,j=e("b311"),O=e.n(j);i["a"].prototype.clipboard=O.a,i["a"].config.productionTip=!1,new i["a"]({render:function(t){return t(x)}}).$mount("#app")},"8b71":function(t,n,e){"use strict";var i=e("e3a2"),o=e.n(i);o.a},e3a2:function(t,n,e){}});