
window.setInterval(function () { changeLight() }, 100);

function changeLight() {
    var leftObject = document.getElementById("left");
    var rightObject = document.getElementById("right");
    if (leftObject.style.background.indexOf("red") > -1) {
        leftObject.style.background = "blue";
        rightObject.style.background = "red";
    } else {
        leftObject.style.background = "red";
        rightObject.style.background = "blue";
    }
}
