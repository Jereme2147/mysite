$(document).ready(function(){
    $("#contact").css({
        "boxShadow": "1px 1px 1px #4F5165, -1px -1px 1px #4F5165",
        "opacity" : ".6"
       });
    $("#email-message").focus(function(){
        $("#email-message").animate({
            "height":"150px"
        }, 500);
    });
    $("#submit").mouseenter(function(){
        $("#submit").animate({
            "width":"50%",
            "border-radius":"20px"
        },250);
    });
    $("#submit").mouseleave(function () {
        $("#submit").animate({
            "width": "20%",
            "border-radius":"5px"
        }, 500);
    });
})
