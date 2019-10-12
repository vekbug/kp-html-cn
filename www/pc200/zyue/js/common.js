$(document).ready(function() {

});

function app_img() {
    var app_img_li = $(".app_img li").length;
    var app_img_w = 2.8 * app_img_li + "rem";
    $(".app_img").css({ "width": app_img_w });

    $(".app_img_icon2 ").click(function() {
        $(".app_img_box").show();
        $(this).hide();
        $(".app_text").hide();
        $(".app_img_icon1").fadeIn(0);
    });
    $(".app_img_icon1 ").click(function() {
        $(".app_img_box").hide();
        $(this).hide();
        $(".app_text").show();
        $(".app_img_icon2 ").fadeIn(0);
    })
}


function show() {
    var box = document.getElementById("box");
    var text = box.innerHTML;
    var newBox = document.createElement("span");
    var btn = document.createElement("b");
    newBox.innerHTML = text.substring(0, 51);
    btn.innerHTML = text.length > 51 ? "<i>...</i>更多" : "";
    btn.href = "###";
    btn.onclick = function() {
        if (btn.innerHTML == "<i>...</i>更多") {
            btn.innerHTML = "收起";
            newBox.innerHTML = text;
        } else {
            btn.innerHTML = "<i>...</i>更多";
            newBox.innerHTML = text.substring(0, 51);
        }
    }
    box.innerHTML = "";
    box.appendChild(newBox);
    box.appendChild(btn);
}