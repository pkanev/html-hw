var ctx = document.getElementById("draw-canvas").getContext("2d");

ctx.font = "48px Arial";
ctx.fillText("I love JavaScript", 25, 100);
ctx.strokeStyle="#FF0000";
ctx.translate(5, 5);
ctx.beginPath();
ctx.setLineDash([5,5]);
ctx.rect(0,0,400,500);
ctx.stroke();
ctx.fillStyle = "#F1DA4E";
ctx.fillRect(50, 150, 300, 300);
ctx.fillStyle = "#000000"
ctx.font = "140px Arial";
ctx.fillText("JS", 170, 430);