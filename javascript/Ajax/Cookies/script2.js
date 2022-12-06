var main = document.querySelector("main");
var img = document.createElement("img");
var p = document.createElement("p");

main.append(img);
img.src=getCookie("src");
main.append(p);
p.innerHTML = "Welcome <span>" + getCookie("userName")  +"</span> and you are visited site " + add();