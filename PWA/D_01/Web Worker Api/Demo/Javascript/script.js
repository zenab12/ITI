var timer;
document.getElementById('btn').onclick=function(){
    var counter = 0
    timer = setInterval(function(){
        document.getElementById('p1').innerHTML += counter + ","
        counter++
    },1000)
}

document.getElementById('btn2').onclick = function(){
    clearInterval(timer)
}

 var myworker = new Worker('../Javascript/script2.js')

document.getElementById('btn3').onclick=function(){
    var value1 = document.getElementById('txt1').value
    var value2 = document.getElementById('txt2').value
    myworker.postMessage([value1,value2])
}

myworker.onmessage=function(event){
    console.log(event.data)
}