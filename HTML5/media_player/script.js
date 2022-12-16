$(function(evt) {

    var off_onBtn = $(".btn.off_on");
    var startBtn = $(".start_pause")
    var controller = $(".controller");
    var volume = $(".volume");
    var volumeCtrl = $(".volume input");
    var disc = $(".disc");
    var audio = $("audio");
    var audioLength = $("input.audio-length");
    var play = $(".play");
    var title = $(".description h2");
    var songImg = $(".songs .active li img");
    var favImg = $(".fav img");


    var playpause_btn = document.querySelector(".playpause-track");
    var next_btn = document.querySelector(".next-track");
    var prev_btn = document.querySelector(".prev-track");
    var seek_slider = document.querySelector(".seek_slider");
    var curr_time = document.querySelector(".current-time");
    var total_duration = document.querySelector(".total-duration");

    var track_index = 0;
    var isPlaying = false;
    var updateTimer;
    var curr_track = document.querySelector("audio");
    let track_list = [{
            name: "night",
            artist: "omar",
            image: "./imgs/disc_1.png",
            path: "./sounds/1.mp3",
            poster: "./imgs/kid-1077793_640.jpg"
        },
        {
            name: "walking",
            artist: "Abdelaziz",
            image: "./imgs/disc_2.png",
            path: "./sounds/2.mp3",
            poster: "./imgs/arab-618749_640.jpg"
        },
        {
            name: "back",
            artist: "Abdullah",
            image: "./imgs/disc_3.png",
            path: "./sounds/3.mp3",
            poster: "./imgs/man-6527045_640.jpg"

        },
    ];


    //when page load track will be the first audio in first index of track list array
    function loadTrack(track_index) {
        // Clear the previous seek timer
        clearInterval(updateTimer);
        resetValues();

        // Load a new track
        curr_track.src = track_list[track_index].path;
        $(disc).find($("img")).attr("src", track_list[track_index].image)
        curr_track.load();

        $(title).text(track_list[track_index].name);
        // Set an interval of 1000 milliseconds
        // for updating the seek slider
        updateTimer = setInterval(seekUpdate, 1000);

        // Move to the next track if the current finishes playing
        // using the 'ended' event
        curr_track.addEventListener("ended", nextTrack);

    }


    $(songImg).on("click", function(e) {
        $(songImg).each(function(ind, el) {
            el.dataset.index = ind;

            track_index = (e.target).dataset.index;
            console.log(this);
        });

        curr_track.src = track_list[track_index].path;
        $(disc).find($("img")).attr("src", track_list[track_index].image);
        curr_track.load();

        $(title).text(track_list[track_index].name);
        // Set an interval of 1000 milliseconds
        // for updating the seek slider
        updateTimer = setInterval(seekUpdate, 1000);

        // Move to the next track if the current finishes playing
        // using the 'ended' event
        curr_track.addEventListener("ended", nextTrack);
        playTrack();
    });


    $(favImg).each(function(ind, el) {
        el.dataset.index = ind;
        track_index = (el).dataset.index;
        curr_track.src = track_list[track_index].path;
        $(disc).find($("img")).attr("src", track_list[track_index].image);
        $(el).attr("src", track_list[track_index].poster);
    });

    //function to resest song based of index

    $(favImg).on("click", function(e) {
        $(favImg).each(function(ind, el) {
            el.dataset.index = ind;
            track_index = (e.target).dataset.index;
            curr_track.src = track_list[track_index].path;
            $(disc).find($("img")).attr("src", track_list[track_index].image);
        });

        curr_track.load();

        $(title).text(track_list[track_index].name);
        // Set an interval of 1000 milliseconds
        // for updating the seek slider
        updateTimer = setInterval(seekUpdate, 1000);

        // Move to the next track if the current finishes playing
        // using the 'ended' event
        curr_track.addEventListener("ended", nextTrack);
        playTrack();
    });


    // Function to reset all values to their default
    function resetValues() {
        curr_time.textContent = "00:00";
        total_duration.textContent = "00:00";
        seek_slider.value = 0;
        ($(audioLength)[0]).value = 0;
    }


    function playpauseTrack() {
        // Switch between playing and pausing
        // depending on the current state
        $(disc).find($("img")).toggleClass("active");
        if (!isPlaying) playTrack();
        else pauseTrack();
    }
    playpause_btn.onclick = playpauseTrack;
    console.log($($(startBtn)[0]))

    function playTrack() {
        // Play the loaded track

        ($(audio)[0]).play();
        $(play).find($("img.ctrlbtn")).attr("src", "./imgs/pause-button.png");
        curr_track.play();
        isPlaying = true;
        $(disc).find($("img")).addClass("active");
        // $($(startBtn)[0]).addClass("active");
        $((startBtn)[0]).find($("img")).addClass("active");
        $($($(controller)[0]).find($("img"))[1]).addClass("active");
        // Replace icon with the pause icon
        playpause_btn.innerHTML = '<i class="fa fa-pause-circle fa-5x"></i>';
        console.log(isPlaying);

    }

    function pauseTrack() {
        // Pause the loaded track
        curr_track.pause();
        isPlaying = false;
        ($(audio)[0]).pause();
        $(play).find($("img.ctrlbtn")).attr("src", "./imgs/play-button.png");
        $(disc).find($("img")).removeClass("active");
        $((startBtn)[0]).find($("img")).removeClass("active");

        $($($(controller)[0]).find($("img"))[1]).removeClass("active");
        // Replace icon with the play icon
        playpause_btn.innerHTML = '<i class="fa fa-play-circle fa-5x"></i>';
        console.log(isPlaying);

    }

    function nextTrack() {
        // Go back to the first track if the
        // current one is the last in the track list
        if (track_index < track_list.length - 1)
            track_index += 1;
        else track_index = 0;

        // Load and play the new track
        loadTrack(track_index);
        playTrack();
    }
    next_btn.onclick = nextTrack;

    function prevTrack() {
        // Go back to the last track if the
        // current one is the first in the track list
        if (track_index > 0)
            track_index -= 1;
        else track_index = track_list.length - 1;

        // Load and play the new track
        loadTrack(track_index);
        playTrack();
    }
    prev_btn.onclick = prevTrack;

    function seekTo() {
        // Calculate the seek position by the
        // percentage of the seek slider
        // and get the relative duration to the track
        seekto = curr_track.duration * (seek_slider.value / 100);
        // Set the current track position to the calculated seek position
        curr_track.currentTime = seekto;
    }

    function seekToDisc() {
        seekto = curr_track.duration * (($(audioLength)[0]).value / 100);
        curr_track.currentTime = seekto;
    }

    seek_slider.onchange = seekTo;
    ($(audioLength)[0]).onchange = seekToDisc;

    function seekUpdate() {
        let seekPosition = 0;

        // Check if the current track duration is a legible number
        if (!isNaN(curr_track.duration)) {
            seekPosition = curr_track.currentTime * (100 / curr_track.duration);
            seek_slider.value = seekPosition;
            ($(audioLength)[0]).value = seekPosition;

            // Calculate the time left and the total duration
            let currentMinutes = Math.floor(curr_track.currentTime / 60);
            let currentSeconds = Math.floor(curr_track.currentTime - currentMinutes * 60);
            let durationMinutes = Math.floor(curr_track.duration / 60);
            let durationSeconds = Math.floor(curr_track.duration - durationMinutes * 60);

            // Add a zero to the single digit time values
            if (currentSeconds < 10) {
                currentSeconds = "0" + currentSeconds;
            }
            if (durationSeconds < 10) {
                durationSeconds = "0" + durationSeconds;
            }
            if (currentMinutes < 10) {
                currentMinutes = "0" + currentMinutes;
            }
            if (durationMinutes < 10) {
                durationMinutes = "0" + durationMinutes;
            }

            // Display the updated duration
            curr_time.textContent = currentMinutes + ":" + currentSeconds;
            total_duration.textContent = durationMinutes + ":" + durationSeconds;
        }
    }

    //check if selected area is button as image big so mush and change cursor to pointer if area true

    var flag = 1;
    $($(off_onBtn)[0]).on("click", "div.circle_btn", (function(e) {
        if (flag == 1) {
            if ($($(off_onBtn).find($("img"))[0]).attr("src") == "./imgs/onButton.png") {
                $($(off_onBtn).find($("img"))[0]).attr("src", "./imgs/offButton.png");
                $(disc).find($("img")).css({
                    "top": "-300px"
                });
                $("body").css({
                    "background-color": "#fff",
                    "color": "#222"
                });
                $(".menu li i").css({
                    "color": "#222"
                });
                $("aside a").css({
                    "color": "#222"
                });
                $("aside p").css({
                    "color": "#222"
                });
                $("header img").attr("src", "./imgs/robot.png");
                $("header h1").css({
                    "color": "#222"
                });
                $("body").addClass("light");
                $("body").removeClass("dark");

            } else {
                $($(off_onBtn).find($("img"))[0]).attr("src", "./imgs/onButton.png");
                $(disc).find($("img")).css({
                    "top": "0px"
                });
                $("body").css({
                    "background-color": "#222",
                    "color": "#fff"
                });
                $(".menu li i").css({
                    "color": "#fff"
                });
                $("aside a").css({
                    "color": "#fff"
                });
                $("aside p").css({
                    "color": "#fff"
                });
                $("header img").attr("src", "./imgs/robot(1).png");
                $("header h1").css({
                    "color": "#fff"
                });
                $("body").addClass("dark");
                $("body").removeClass("light");


            }
        } else {
            flag -= 1;
        }
        console.log(flag);
        $($(off_onBtn).find($("img"))[0]).toggleClass("active");
    }));



    $(startBtn).find($(".circle_btn")).mousemove(function(e) {
        $($(startBtn)[0]).on("click", ".circle_btn", (function(e) {
            if (flag == 1) {
                playpauseTrack();

            } else {
                flag -= 1;
            }

        }));
    });


    $($($(controller)[0]).find($("div.circle_btn"))[0]).on("click", (function(e) {
        if (flag == 1) {
            playpauseTrack();

        } else {
            flag -= 1;
        }
    }));



    $(volumeCtrl).val(Math.round((($(audio)[0]).volume) * 10));
    $(volumeCtrl).on("input", function() {
        ($(audio)[0]).volume = parseInt(($(this).val())) * 0.1;
    });



    ($(audio)[0]).onseeked = function() {

        if (($(audio)[0]).duration > 0 && !(($(audio)[0]).paused)) {
            $(play).find($("img.ctrlbtn")).attr("src", "./imgs/pause-button.png");
        } else {
            $(play).find($("img.ctrlbtn")).attr("src", "./imgs/play-button.png");
        }

        ($(audio)[0]).onplaying = function() {
            $(play).find($("img.ctrlbtn")).attr("src", "./imgs/pause-button.png");
            $(disc).find($("img")).addClass("active");
        };

        ($(audio)[0]).onended = function() {
            $(play).find($("img.ctrlbtn")).attr("src", "./imgs/play-button.png");
            $(disc).find($("img")).removeClass("active");
        };


    };


    ($(audio)[0]).onvolumechange = function() {
        $(volumeCtrl).val(Math.round((($(this)[0]).volume) * 10));
        if (($(audio)[0]).volume == 0) {
            $(volume).find($("img.ctrlbtn")).attr("src", "./imgs/volume-mute.png");

        } else {
            $(volume).find($("img.ctrlbtn")).attr("src", "./imgs/volume.png");
            console.log("paused");
        }
    }

    loadTrack(track_index);

    var tab = $(".tab");
    $(tab).click(function(e) {
        $($("." + $(this).attr("id"))[0]).on("click", function(e) {
            $($(this).find($("img"))).each(function(ind, el) {
                el.dataset.index = ind;
                $(el).on("click", function(e) {
                    track_index = (e.target).dataset.index;
                    console.log(e.target);
                    curr_track.src = track_list[track_index].path;
                    $(disc).find($("img")).attr("src", track_list[track_index].image);
                })
            })

            curr_track.load();

            $(title).text(track_list[track_index].name);
            // Set an interval of 1000 milliseconds
            // for updating the seek slider
            updateTimer = setInterval(seekUpdate, 1000);

            // Move to the next track if the current finishes playing
            // using the 'ended' event
            curr_track.addEventListener("ended", nextTrack);
            playTrack();
        });
        $(e.target).toggleClass("active");
        $(e.target).siblings().removeClass("active");
        $($("." + $(e.target).attr("id"))[0]).toggleClass("active");
        $($("." + $(this).attr("id"))[0]).siblings().removeClass("active");
        console.log($("body").hasClass("light"))



    });


});



//old bad code 
// $(startBtn).find($(".circle_btn")).mousemove(function (e) {
//     // if ((e.clientX >= 500 && e.clientX < 560 && e.clientY < 375 && e.clientY >= 320)) {
//         $($(startBtn)[0]).on("click", ".circle_btn", (function (e) {
//             // ($(audio)[0]).ontimeupdate = function () {
//             //     $(audioLength).val(($(audio)[0]).currentTime);
//             // };               
//             // if (($(audio)[0]).duration > 0 && !(($(audio)[0]).paused)) {

//             //     ($(audio)[0]).pause();
//             //     $(play).find($("img.ctrlbtn")).attr("src", "./imgs/play-button.png");
//             //     pauseTrack();

//             // } else {
//             //     ($(audio)[0]).play();
//             //     playTrack();
//             //     $(play).find($("img.ctrlbtn")).attr("src", "./imgs/pause-button.png");

//             // }

//             playpauseTrack();

//         }));
// });
// // $(audioLength).attr("max", parseInt(($(audio)[0]).duration));
// // $(audioLength).val(($(audio)[0]).currentTime);

// // $(audioLength).on("input", function () {
// //     curr_track.currentTime = $(this).val();
// //     console.log($(this).val());
// // })
