//Slider 

var nextButton = document.querySelector("button.Next");
var prevButton = document.querySelector("button.Prev");

var slide = document.querySelector("button.slide");
var stopButton = document.querySelector("button.stopButton");


var img = document.querySelector("div.img-container img");
var counter = 1;



nextButton.addEventListener("click", function () {
    if (counter < 6) {
        counter++;
    } else {
        counter = 1;
    }

    img.setAttribute("src", "./SlideShow/" + counter + ".jpg");
});



prevButton.addEventListener("click", function () {
    if (counter > 0) {
        counter--;

    } else {
        counter = 6;
    }
    img.setAttribute("src", "./SlideShow/" + counter + ".jpg")


});


var sliderInterval;
slide.addEventListener("click", slider);
function slider() {
    sliderInterval = setInterval(count, 1000);
    function count() {
        if (counter < 6) {
            counter++;

        } else {
            counter = 1;
        };
        img.setAttribute("src", "./SlideShow/" + counter + ".jpg");

    }


}

console.log(stopButton);

stopButton.addEventListener("click", function () {
    clearInterval(sliderInterval);
    console.log("stop");
});




