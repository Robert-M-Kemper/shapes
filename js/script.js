function mySphere() {
    var c = document.getElementById("mycanvas");
    var draw = c.getContext("2d");
    draw.beginPath();
    draw.fillStyle = "red";
    draw.arc(135, 175, 50, 0, Math.PI * 2, true);
    draw.closePath();
    draw.fill();
}

function mySphere2() {
    var c = document.getElementById("mycanvas");
    var draw = c.getContext("2d");
    draw.beginPath();
    draw.fillStyle = "red";
    draw.arc(75, 75, 50, 0, Math.PI * 2, true);
    draw.closePath();
    draw.fill();
}
 
function mySquare() {
    var c = document.getElementById("mycanvas");
    var draw = c.getContext("2d");
    draw.beginPath();
    draw.fillStyle = "blue";
    draw.fillRect(70, 180, 100, 600);
    draw.closePath();
    draw.fill();
}

function bodyLoad(){
    mySquare();
    mySphere();
    mySphere2();
   

}