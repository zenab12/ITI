var form = document.querySelector("form");
var userName = document.querySelector("input[type='text']");
var imgSrc = document.querySelectorAll("input[type='radio'");
var inputsGender = document.querySelectorAll("input[type='radio'");
inputsGender[0].addEventListener("click",function(e){
    setCookie("src",this.value);

});
inputsGender[1].addEventListener("click",function(e){
setCookie("src",this.value);

});

form.addEventListener("submit",function(e){
    e.preventDefault();
    add();
    setCookie("userName",userName.value);
    location.replace("greeting.html");
});

