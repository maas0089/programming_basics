var c = document.getElementById("diamond_canvas");
var ctx = c.getContext("2d");

function drawDiamond() {
    // 4 keer een path gemaakt om de kleur van elke lijn te kunnen veranderen
    ctx.beginPath();
    ctx.strokeStyle = "red";
    ctx.moveTo(0, 100);
    ctx.lineTo(100, 0);
    ctx.stroke();
   
    ctx.beginPath();
    ctx.strokeStyle = "blue";
    ctx.moveTo(100, 0)
    ctx.lineTo(200, 100);
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle = "green";
    ctx.moveTo(200, 100);
    ctx.lineTo(100, 200);
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle = "purple";
    ctx.moveTo(100, 200);
    ctx.lineTo(0, 100);
    ctx.stroke();
}

// Deze functie maakt het canvas weer leeg
function clearCanvas() {
    ctx.clearRect(0, 0, c.width, c.height);
}