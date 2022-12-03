// var div = document.getElementById("mydiv");
// div.textContent += "menna";

// div.style.backgroundColor = "red";
// div.style.width ="200px";
// div.style.height = "200px";
// div.setAttribute("class","hamada");
// div.classList.add("hamada");

/////////////create element/////

//=========1-create elem in code/////
// var h1 = document.createElement("h1");//<h1></h1>
// h1.textContent = "hello";
// h1.style.backgroundColor ="red";
// h1.setAttribute("class","hamada");
// //h1.innerText = "hello";

// console.log(h1);


// //2==append in real element in dom
// //document.body.append(h1);
// div.append(h1);
//////////////////////////
// div.innerHTM += "<h1 class='hamada'>hello</h1>"

// div.innerHTML = div.innerHTML + "aaa"
// console.log(div.innerHTML);//get
//////////////////////////////////////////////////
// do{

//     var personsNo = prompt("enter no of persons");

// }while(!isFinite(personsNo))
// // console.log(personsNo);
// personsNo = Number(personsNo);
// var names =[];
// var ages =[];
// for(var i=0;i<personsNo;i++){
//     do{

//        var n =  prompt("enter name person no "+(i+1));
//     }while(isFinite(n));
//     names.push(n);
//     do{

//         var a =  prompt("enter age person no "+(i+1));
//      }while(!isFinite(a));
//      ages.push(a);

// }
// console.log(names);
// console.log(ages);

////////////////create element from js
// for(var i=0;i<names.length;i++){

//     var tr = document.createElement("tr");
//     tr.innerHTML = " <td>"+names[i]+"</td><td>"+ages[i]+"</td>"
//     console.log(tr);
//     var tbody  =document.getElementsByTagName("tbody")[0];
//     tbody.append(tr);
// }

// document.querySelector("table").style.display = "table";

//  <tr>
//      <td>menna</td>
//      <td>26</td>
//</tr> 

////////create ele in code append ele

//inner html
// ////////////////////////////////////////////
 //var div = document.getElementsByClassName("mydiv")[0];
// var div = document.createElement("div");
// div.textContent = "hello";
// div.remove();
// var d = div.cloneNode(true);
//  document.body.append(d);
//  d.remove();
// document.body.append(div.cloneNode(true));
// document.body.append(div.cloneNode(false));
// document.body.append(div.cloneNode(false));
// document.body.append(div.cloneNode());

////////////////////////////
// function test(div){
//     //console.log(div);
//   //div.style.backgroundColor = "red";
//   alert(div.textContent);
  
// }


////////////event as porperty//////////
var div = document.getElementById("mydiv");
// div.onclick = function(){
  
// alert("hello");
// div.style.backgroundColor = "red";

// }
// div.onclick = function(){
//   test("hamada");
// }
// function test(x){
  
//   alert(x);
//   div.style.backgroundColor = "red";
  
//   }
///////////event listener///////////

// div.addEventListener("click",function(e){
//   if(this!==e.target){

//     alert(e.target.innerText);
//   }
  // console.log(arguments[0]);
    // console.log(e);
  // alert("hello");
  // div.style.backgroundColor = "red";
// })
// window.addEventListener("keypress",function(e){
//   console.log(e);

// })

// window.addEventListener("contextmenu",function(e){
//   e.preventDefault();

// })

////////////////////////
var btn = document.getElementsByTagName("input")[1];
btn.addEventListener("click",validation);
// var v = document.querySelector("input").value;

function validation(){
  var inp = document.querySelector("input");
  var span = document.getElementsByTagName("span")[0];
  if(inp.value===""){
      span.textContent = "this field is required";
      span.style.display = "inline";
  }
  else if(isFinite(inp.value)){
    span.textContent = "please enter characters";
    inp.value = "";
    span.style.display = "inline";

  }
  else{
    span.style.display = "none";
    alert("hello "+ inp.value);
    inp.value = "";
  }

}
