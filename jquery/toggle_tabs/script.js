$(function () {

    var tab = $(".tab");
    $(tab).click(function (e) {
        $(e.target).toggleClass("active");
        $(e.target).siblings().removeClass("active");
        $($("." + $(e.target).attr("id"))[0]).toggleClass("active");
        $($("." + $(e.target).attr("id"))[0]).siblings().removeClass("active");
    });

})