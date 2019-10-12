function checkTime(i) { 
	if (i<10) 
	{i="0"+i} 
	return i 
}
//当前时间
var d = new Date() //新建一个Date对象 
var year = d.getFullYear() //获取年份 
var month = d.getMonth()+1 //获取月份 
var day = d.getDate()+0 //获取日期 
var hour = d.getHours()-3 //获取小时
var min = d.getMinutes()+6 //获取分钟 
if(day>1){
	day=day-1;	
}
if(hour<1){
	hour = 0;
}
if(min<1){
	min = 1;
}
var sec = d.getSeconds() //获取秒数 
// document.write(year+"-"+month+"-"+day+" "+checkTime(hour)+":"+checkTime(min)+":18")
var time = year+"年"+month+"月"+day+"日 "+checkTime(hour)+":"+checkTime(min)+":18"
console.log(time)
document.getElementById("time").innerHTML = time; var myDate = new Date();
myDate.getYear();        //获取当前年份(2位)
myDate.getFullYear();    //获取完整的年份(4位,1970-????)
myDate.getMonth();       //获取当前月份(0-11,0代表1月)
myDate.getDate();        //获取当前日(1-31)