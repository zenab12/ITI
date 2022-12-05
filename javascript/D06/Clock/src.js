
var clockDiv = document.getElementById("clock");
var hours = document.querySelector("span.hour");
var minutes = document.querySelector("span.minutes");
var seconds = document.querySelector("span.seconds");
var startButton = document.querySelector("button.start");
var stop = document.querySelector("button.stop");

startButton.addEventListener("click", fireClock);

// var seconds ;
function fireClock() {
    var date = new Date();
    hours.innerHTML = date.getHours();
    minutes.innerHTML = date.getMinutes();
    seconds.innerHTML = date.getSeconds();

    var secondTimer = setInterval(timer, 1000);
    function timer() {
        if (parseInt(seconds.innerHTML) >= 60) {
            seconds.innerHTML = 0;
        } else {
            seconds.innerHTML = parseInt(seconds.innerHTML) + 1;
        }
    }


    var minutesTimer = setInterval(mtimer, 60000);
    function mtimer() {
        if (parseInt(minutes.innerHTML) >= 60) {
            minutes.innerHTML = 0;
        } else {
            minutes.innerHTML = parseInt(minutes.innerHTML) + 1;
        }
    }


    var hoursTimer = setInterval(htimer, 360000);
    function htimer() {
        if (parseInt(hours.innerHTML) >= 24) {
            hours.innerHTML = 0;
        } else {
            hours.innerHTML = parseInt(hours.innerHTML) + 1;
        }
    }




    stop.addEventListener("click", function () {

        clearInterval(secondTimer);
        clearInterval(hoursTimer);
        clearInterval(minutesTimer);

    });

    window.addEventListener("keydown", function (e) {

        if (e.altKey == true && e.keyCode == 65) {
            console.log('Alt + A');
            clearInterval(secondTimer);
            clearInterval(hoursTimer);
            clearInterval(minutesTimer);
        }
    })

}



