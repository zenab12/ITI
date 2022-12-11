$(function(){

var addButton = $("form button");
var input = $("input");
var tbody = $("tbody");
var spanerr = document.createElement("span");
$(".message").append(spanerr);
$(spanerr).text("You should enter your Note ** ");
$(spanerr).hide();
addButton.click(function(e){
    e.preventDefault();

    if(input.val() !== ""){
    tbody.append("<tr><td>"+input.val()+"</td><td><button class='delete'>Delete</button></td></tr>");
    $(spanerr).fadeOut(100);
    input.val("");

    }else 
    {
        $(spanerr).css({"color":"#821d30","font-size":"20px"})
        $(spanerr).fadeIn(1000);

    }
});

$("tbody").on("click",".delete",function(){
    console.log($(this).parent().parent().remove())
})





})