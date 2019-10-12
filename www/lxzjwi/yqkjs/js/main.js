//获取get参数
var u = navigator.userAgent;
var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
var isWx = u.indexOf('MicroMessenger') > -1;
var $_GET = (function(){
    var url = window.document.location.href.toString();
    var u = url.split("?");
    if(typeof(u[1]) == "string"){
        u = u[1].split("&");
        var get = {};
        for(var i = 0 ; i < u.length ; i++){
            var j = u[i].split("=");
            get[j[0]] = j[1];
        }
        return get;
    } else {
        return {};
    }
})();
$(document).on('mouseover','.nav-li,.download-c',function() {
	$(this).children('.qr').show();
});
$(document).on('mouseout','.nav-li,.download-c',function() {
	$('.qr').hide();
});
$(function(){
    setInterval(function(){
        var l = parseInt($("#carousel-t").css("left"));
        l -= 213;
        $("#carousel-t").animate({left:l + 'px'},500,function() {
            if(l <= -600) {
                $("#carousel-t").animate({left:0},0);
            }
        });
    },2000);
    setInterval(function(){
        var l = parseInt($("#carousel-m").css("left"));
        l -= 233;
        $("#carousel-m").animate({left:l + 'px'},500,function() {
            if(l <= -600) {
                $("#carousel-m").animate({left:0},0);
            }
        });
    },2000);
});
