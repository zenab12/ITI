$(function(){

    var leftMenu = $(".menu");
    var innerDiv = $("li div");
    var item = $("li");
    $(innerDiv).hide();
    $(leftMenu).hover(function(){
        $(this).animate({"left":"0px"});
    },function(){
        $(this).animate({"left":"-"+(parseInt($(this).css("width"))-30)+"px"});
        console.log("-"+parseInt($(this).css("width"))-20+"px")
    });

    $(item).click(function(){
        $(this).find($(innerDiv)).slideToggle(1000);    
    })


})