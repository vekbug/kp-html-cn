"use strict";var templateConfig={s1001:"v1",s1002:"v2",s1003:"v3",s1004:"v4",s1005:"v5",s1006:"v6",s1007:"v7",s1008:"v8",s1009:"v9",s1010:"v10",s1011:"v11",s1012:"v12"};require.config({urlArgs:"v=1556541075745",paths:{knockout:"https://qcdn-legacy.zhangzhongyun.com/vendor/knockout/3.4.2/knockout-min",util:"scripts/util",appinfo:"scripts/appinfo",track:"scripts/track",v1:"scripts/app/v1",v2:"scripts/app/v2",v3:"scripts/app/v3",v4:"scripts/app/v4",v5:"scripts/app/v5",v6:"scripts/app/v6",v7:"scripts/app/v7",v8:"scripts/app/v8",v9:"scripts/app/v9",v10:"scripts/app/v10",v11:"scripts/app/v11",v12:"scripts/app/v12","invite-app":"scripts/app/invite-app",post:"scripts/app/post",comment:"scripts/app/comment","share-app":"scripts/app/share-app"},shim:{track:{deps:["util"]},v1:{deps:["knockout"]},v4:{deps:["knockout"]},v8:{deps:["knockout"]},v10:{deps:["knockout"]},v12:{deps:["knockout"]}}});var search=new URLSearchParams(location.search),pathname=location.pathname.replace(/\/|.html/g,""),currentTemplate=void 0,templateID=pathname;if(/^v.*/.test(pathname)){templateID=(currentTemplate=pathname.replace(/-.*/g,"")||"v1")||"v1";var chidParam=search.get("chid");if(chidParam&&0<chidParam.indexOf("-")){var id=templateConfig[chidParam.split("-")[0].toLowerCase()];templateID=id||templateID}}require([templateID,"text!templates/"+templateID+".html"],function(t,p){$("#app").html(p);try{t.init(copyright)}catch(p){t.init()}});