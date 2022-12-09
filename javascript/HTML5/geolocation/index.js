
var map;

function initMap(x, y) {
    var loc = { lat: x, lng: y };
    //  var loc = { lat:30.6210114, lng:32.2686064};

    map = new google.maps.Map(document.getElementById("map"),
        {
            center: loc,
            zoom: 10,
        });

}

var cities = { current: [0, 0], damietta: [31.417540, 31.814444], mansoura: [31.037933, 31.381523], alex: [31.205753, 29.924526] };

navigator.geolocation.getCurrentPosition(function (obj) {

    cities["current"][0] = obj.coords.latitude;
    cities["current"][1] = obj.coords.longitude;
    initMap(obj.coords.latitude, obj.coords.longitude);

    var select = document.getElementsByTagName("select")[0];

    var cord;
    select.addEventListener("change", function (e) {
        cord = cities[e.target.value];
        initMap(cord[0], cord[1]);

    });


}, function () {
    alert("try again");
    cities["current"][0] = 0;
    cities["current"][1] = 0;
    initMap(cities[0], cities[0]);

    var select = document.getElementsByTagName("select")[0];

    var cord;
    select.addEventListener("change", function (e) {
        cord = cities[e.target.value];
        initMap(cord[0], cord[1]);

    });
});