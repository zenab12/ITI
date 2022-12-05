// var btn = document.getElementsByTagName("input")[1];
// btn.addEventListener("click",validation);
// var v = document.querySelector("input").value;
// var form = document.getElementsByTagName("form")[0];
// form.addEventListener("submit",validation)

// function validation(e){
   
//   var inp = document.querySelector("input");
//   var span = document.getElementsByTagName("span")[0];
//   if(inp.value===""){
//     e.preventDefault();
//       span.textContent = "this field is required";
//       span.style.display = "inline";
//   }
//   else if(isFinite(inp.value)){
//     e.preventDefault();
//     span.textContent = "please enter characters";
//     inp.value = "";
//     span.style.display = "inline";

//   }
  

// }

// var divs =  document.getElementsByTagName("div");

// divs[0].addEventListener("click",function(e){
//   //  e.stopPropagation();
//   if(this===e.target)
//     alert("iam red");
// },false)

// divs[1].addEventListener("click",function(e){
//    // e.stopPropagation();
//    if(this===e.target){

//        alert("iam green");
//    }

// },false)
// divs[2].addEventListener("click",function(e){
//    // e.stopPropagation();
//     alert("iam yellow");
// },false)

//////////////////BOM//////////////////
// window.setTimeout(function(){
//     alert("hello");
// },2000);
// var b;
// var x = window.setInterval(function(){
//     b = 5;
//     console.log(b);
//     console.log("hello");
// },500);
// console.log(b);

// document.getElementsByTagName("button")[0].addEventListener("click",function(){
//     clearInterval(x);

// })


////////////////////////
// function first(){
// console.log("first");
// second();
// console.log("third");
// }
// function second(){
//     setTimeout(function(){
//         console.log("second");
//     },2000)

// }

// first();
// var c ;
// document.getElementsByTagName("button")[0].addEventListener("click",function(){
//     console.log("hello");
//     c = 50;

// })

// console.log("first");
// console.log(c);
////////////////////////////////////////////////

//  var btns = document.getElementsByTagName("button");
// var childWind;
// btns[0].addEventListener("click",function(){
//    childWind  = open("page2.html","","left=100,top=100,width=320,height=320");
//    setTimeout(function(){
//     childWind.close();
//     },2000)

// })

// btns[1].addEventListener("click",function(){
//     if(childWind){

//         childWind.close();
//     }
// })
// btns[2].addEventListener("click",function(){
//         window.print();
// })
//////////wenabi mt3mlohash tanniiiiiiiiiiiii
// if(childWind){

//     // setTimeout(function(){
//     // childWind.close();
//     // },2000)
// }
//////////////////////////////
// console.log(navigator);//browser client 
// console.log(history);

// btns[0].addEventListener("click",function(){
//     history.back();
// })
// btns[1].addEventListener("click",function(){
//     history.forward();
// })
// btns[2].addEventListener("click",function(){
//     // history.back();
//     //history.go(-2);
//     //  window.location.reload();
//     location.replace("page2.html");
// })
//location 
/////////////////////////////////
//anonmouys object.........

// var v = new Object();
var y = {
    name:"menna",
    age:25,
    print:function(){
        console.log("hello");
    }
}
// var c = {};
// c.age = 25;
// c.address = ["aaa","aaa"];
// c.phone = {
//     mobile:"012",
//     phone:"064"
// }
//object Object
//dot notation/////
// alert(y.name);//get
// y.name = "hamada";//set
// y.print();

///subscribe notation////
// var n = "name";
// y[n] = "hamada";//set
// alert(y["name"]);//get

///////////////////////
//set key not exist////
// y.email = "menna@aaa.com";
//get key not exist
// console.log(y.email);

// var c = y;
// c.name = "aya"