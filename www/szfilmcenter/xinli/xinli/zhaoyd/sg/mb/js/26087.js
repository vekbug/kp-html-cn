


















var JESONG_MESSAGE_TEXT;
var jesong;
(function(){
	function isMobile(){
		if(/AppleWebKit.*Mobile/i.test(navigator.userAgent) || (/MIDP|SymbianOS|NOKIA|SAMSUNG|LG|NEC|TCL|Alcatel|BIRD|DBTEL|Dopod|PHILIPS|HAIER|LENOVO|MOT-|Nokia|SonyEricsson|SIE-|Amoi|ZTE/.test(navigator.userAgent))){ 
			return true;
		}else{
			return false;
		}
	}
	if(jesong || (false && true != isMobile())){
		return;
	}
JESONG_MESSAGE_TEXT = {"inviteText":"","extCode":"","msgOfDisConnected":"感谢您的咨询， 再见！","welcomeMsgOfConnected":"<p>您好，这里是ACI心理咨询师报考咨询中心，您是想咨询了解：</p><p>报考条件、报考时间、考试科目、报考流程</p>","inviteTitle":"","replyMsgAtConnected":"","msgOfTrans":"您的对话将被转移给我的同事， 感谢您的咨询！"};
jesong={	
	lazy : false,
	version : '2018081606',
	language : 'en',
	visitorReady : false,
	forceReady : false,
	chatRequest : false,
	jsType : 1,
	callerOpinion : "0",
	env:{
		isPhone : true,
		scheme : "http",
		schemePort : "80",
		server:{
			monitor:'http://m.easyliao.com/',
			chat:'http://live.easyliao.com/live/',
			file:'http://scripts.easyliao.com/prd/'
		},
		compId:12521,
		confId:26087,
		vId:'',
		uId:'',
		pId:0,
		sid:7920,
		promotionId:0,
		mId:'',
		lang:'',
		min:0,
		pos:'1'
	},
	config:{
		firstToRebot:0,
		phoneChatPop:0,
		monitor:false,
		panel:false,
		frameChatStyle:14,
		forceChatLogo:""
	},
	monitor:{},	panel:{},win:{},icon:{},text:{}, freecall:{}, probe:{}, phone:{},
	_isBindHost:function(){
		var bindHosts = "";
		if(bindHosts != ""){
			var _hosts = bindHosts.split(",");
			var domain = window.location.host;
			var bindHostFlag = false;
			for(var i=0; i < _hosts.length; i++){
				if(domain == _hosts[i]){
					bindHostFlag = true;
					break;
				}
			}
			return bindHostFlag;
		}else{
			return true;
		}
	},
	_genId : function(){
		var random4 = function(){
			return parseInt(Math.random()*9000+1000, 10);
		}
		var cId = "12521";
		while(cId.length < 12){
			cId = "0"+cId;
		}
		var id = ""+new Date().getTime();
		id = id.substring(3);
		id += random4();
		id += random4();
		return "01"+cId+id;
	},
	_createLayout : function(id, className){
		if(!this.lazy){
			document.write('<div id="'+id+'" class="'+className+'"></div>');
		}else{
			var _div = document.createElement("div");
			_div.id = id;
			_div.className = className;
			document.body.appendChild(_div);
		}
	},
	_loadJS : function(src){
		if(!this.lazy){
			//async="async"
			document.write('<scr'+'ipt type="text/javascript" defer src="'+src+'"></scr'+'ipt>');
		}else{
		    var script = document.createElement( "script" ); 
			script.type = "text/javascript"; 
			script.charset = "utf-8";
			script.src = src; 
			document.getElementsByTagName("script")[0].parentNode.appendChild(script); 
		}
	},
	_loadCSS : function(url){ 
		if(!this.lazy){
			document.write('<link rel="stylesheet" type="text/css" href="'+url+'"></link>');
		}else{
			var link = document.createElement( "link" ); 
			link.type = "text/css"; 
			link.rel = "stylesheet"; 
			link.href = url; 
			document.getElementsByTagName( "head" )[0].appendChild( link ); 
		}
	},
	init:function(){
		if(this._isBindHost()){
			jesong.env.vId = this._genId();
			this._createLayout("jesong_panel", "");
			if(jesong.jsType == 1 && jesong.env.isPhone){
				this._createLayout("jesong_chat_layout", "jesong_phone_layout jesong_phone_layout_en_1");
			}else{
				this._createLayout("jesong_chat_layout", "jesong_chat_layout_pc jesong_chat_layout_pc_en");
			}
			this._createLayout("jesong_chat_min", "jesong_chat_min_en");
			this._createLayout("jesong_pop_msg", "");
			if("https:" == document.location.protocol){
				this.env.server.monitor = this.env.server.monitor.replace("http", "https");
				this.env.server.chat = this.env.server.chat.replace("http", "https");
				this.env.server.file = this.env.server.file.replace("http", "https");
				this.env.schemePort = "443";
				this.env.scheme = "https";
				
			}
			this._loadCSS(this.env.server.file + "css/webcall.css?ver=2018081606");
			this._loadJS(this.env.server.file + "js/webcall.js?ver=2018081606");
			this._loadCSS(this.env.server.file + "css/force.css?ver=2018081606");
		}
	},
	words:{
		welcome:JESONG_MESSAGE_TEXT.welcomeMsgOfConnected,
		greeting:JESONG_MESSAGE_TEXT.replyMsgAtConnected,
		disconnect:JESONG_MESSAGE_TEXT.msgOfDisConnected
	}
};



jesong.probe = {
	texts:"", 
	groupIds:""
};

jesong.autochat={
	keyWord : null,
	sendkeyWord : 0,
	bgcolor:'#3097ef',
	width:320,
	height:435,
	use:0,
	start:'00:00',
	end:'24:00',
	times:-1,
	delay : 0,
	hideMonitor : true,
	show:false,
	welcome:JESONG_MESSAGE_TEXT.welcomeMsgOfConnected,
	waitSendMsg:'',
	connect : '0',
	closeBtn : '1',
	minBtn : '1',
	mask : '0',
	userHead : 'http://scripts.easyliao.com/prd//images/chat/201805/head-user.png',
	visitorHead : 'http://scripts.easyliao.com/prd//images/chat/201805/head-visitor.png',
	phoneHeight : 80,
	tel : '',
	pageTitle : '',
	pcMinLogo : '',
	autoPopMWinTime : 0,
	autoPopMWinPeroid : 0,
	tools:{
		emoticons : '1',
		opinion : '0',
		screen : '1',
		file : '0'
	}
};
jesong.init();

})();

		

