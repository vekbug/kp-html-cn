/**
 * Created by admin on 2018/4/25.
 */
$(function(){
    function check(siteid,phone){//添加数据库记录
        post('http://36.110.107.219:20002/kld_salescenter/input_page', {
            site_id:siteid,
            student_cellphone:phone,
        });
// 执行提交
        function post(URL, PARAMS) {
            $.ajax({
                url:URL,
                dataType:'jsonp',
                data:PARAMS,
                jsonp:'callback',
                success:function(result) {
                    for(var i=0;i<result.length;i++){
                        if(result[i].rescode == '1'){
                            alert('恭喜你，成功获取助学金')
                        }
                    }
                }
            });
        }
    }
    //手机号验证
    function isTelCode(str) {
        var reg= /^((0\d{2,3}-\d{7,8})|(1[32584679]\d{9}))$/;
        return reg.test(str);
    }
    $('#submit1').click(function(e){
        //用手机留言发起按钮的选择器替换#more
        var stPhone = $('#stuPhone1').val();  //用手机留言输入框的选择器替stPhone
        if(stPhone == '' ) {
            alert("请填写您的手机号");
            return false;
        }else if(stPhone !='' && !isTelCode(stPhone)){
            alert('手机号码格式不正确')
        }else{
            var siteid = NTKF_PARAM.erpparam
            check(siteid,stPhone)
        }
    })
});