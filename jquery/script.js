$(document).ready(function(){
console.log($('.div'));
console.log(document.querySelectorAll(".div"))
$("div:has('span')").css("color","green");

var button=document.getElementsByTagName("button")[0];
var container = $(".container");
button.addEventListener("click",function(){
for(var i=0;i<3;i++)
{
    var btn = document.createElement("button");
    btn.textContent = i+1;
    container.append(btn);
    btn.classList.add("btn");
    //solution in js 
    // btn.addEventListener("click",function(){
    //     alert(this.textContent)
    // })
}
});

//this code will not work as btns created in runtime so we must put event of element while creating it in above code 
// var btns = $(".btn");
// console.log(btns);
// for(var i=0;i<btns.length;i++)
// {
//     btns[i].addEventListener("click",function(){
//         alert(this.textContent)
//     })
// }

//another solution using on method in jquery
$(".container").on("click",".btn",function(){
 alert(this.textContent);
});


//framework is steps and use rules code will not work if we don't follow these rules but library has methods and if we don't use it code will work okay

});