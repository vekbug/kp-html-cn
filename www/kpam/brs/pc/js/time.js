$(function(){
    window.onload = function getNewTime(){ 
    var myDate = new Date();

    var month = myDate.getMonth()+1;
    if(month<10){
        var month='0'+month;}
    var date = myDate.getDate()+1;
    if(date<10){
        var date='0'+date;}

    $("#month").html(month);
    $("#day").html(date);
    }
});