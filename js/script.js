// BookSwap javascript

function highlight(x) {
    x.style.background = "lightyellow";
}

function normal(x) {
    x.style.background = "white";
}

function showGreeting() {
    var now = new Date();
    var hour = now.getHours();
    var text;

    if (hour < 12) {
        text = "Good morning";
    } else if (hour < 18) {
        text = "Good afternoon";
    } else {
        text = "Good evening";
    }

    document.getElementById("greeting").innerHTML = text + ", welcome to BookSwap!";
}

function showError(field, message) {
    document.getElementById(field).style.border = "2px solid red";
    document.getElementById(field + "Error").innerHTML = message;
}

function showRight(field) {
    document.getElementById(field).style.border = "2px solid green";
    document.getElementById(field + "Error").innerHTML = "";
}

function resetField(field) {
    document.getElementById(field).style.border = "1px solid gray";
    document.getElementById(field + "Error").innerHTML = "";
}
