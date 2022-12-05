var form = document.forms[0];
var addButton = document.getElementsByClassName("add")[0];
var errSpan = [form.children[0].children[1], form.children[1].children[1], form.children[2].children[1]];
var resetButton = document.querySelector("input[type='reset'");
var regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
var table = document.getElementsByTagName("table")[0];
var tbody = document.getElementsByTagName("tbody")[0];



addButton.addEventListener("click", function (e) {
    e.preventDefault();
    if (form.children[0].children[0].value == "") {

        errSpan[0].innerHTML = " the field is required";
    }else {
        errSpan[0].innerHTML = "";
   
    }

    if (form.children[1].children[0].value == "") {

        errSpan[1].innerHTML = " the field is required";

    }else 
    {
        errSpan[1].innerHTML = "";

    }

    if (form.children[2].children[0].value == "") {
        errSpan[2].innerHTML = " the field is required";

    }else{
        errSpan[2].innerHTML = "";

    }

    //email validation 
    if (regex.test(form.children[2].children[0].value) && form.children[2].children[0].value != "") {
        console.log("ok");
    } else {
        form.children[2].children[1].innerHTML = "Not a valid email address";
    }


    //email check
    form.children[2].children[0].addEventListener("keypress", function () {
        if (regex.test(form.children[2].children[0].value) && form.children[2].children[0].value != "") {
            console.log("ok");
            form.children[2].children[1].innerHTML = "";
        } else {
            form.children[2].children[1].innerHTML = "Not a valid email address";
        }

    });



    //add table 

    if (errSpan[0].innerHTML == "" && errSpan[1].innerHTML == "" && errSpan[2].innerHTML == "") {

        console.log(true);
        var tr = document.createElement("tr");
        tbody.append(tr);

        for (var i = 0; i < 3; i++) {
            var td = document.createElement("td");
            td.innerText = form.children[i].children[0].value;
            tr.append(td);
        }

    }



});



//reset span errors 
resetButton.addEventListener("click", function () {
    for (var i = 0; i < errSpan.length; i++) {
        errSpan[i].innerHTML = "";
    }
});






