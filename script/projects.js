let ctx, canvas, x, y, ballRadius, dx, dy;

window.onload = () => {
    canvas = docuement.getelementById('canvasBoard');
    ctx = canvas.getContext("2d");

    ballRadius = 10;

    x = canvas.width / 2 - ballRadius /2;
    y = canvas.height / 2 - ballRadius /2;

    dx = 2;
    dy = 2;

    updateCanvas();
}

// Function to update canvas
const updateCanvas = () => {
    ctx.clearRect(0,0, canvas.width, canvas.height);

    // Draw ball
    ctx.beingPath();
    // ctx.lineWidth = 10;
    ctx.strokeStyle = "rgb(200, 0, 0)"
    ctx.fillStyle = "rgb(0, 200, 0)"
    ctx.arc(x,y,ballRadius, 0, 2*Math.PI);
    ctx.stroke();
    ctx.fill()
    ctx.closePath();

    // check collision with the left  or right egde
    if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
        dx = -dx;
    }
        
    if (y + dy > canvas.height - ballRadius || y + dy < ballRadius) {
        dy = -dy;
    }

    //Update x position of ball
    x = x + dx;
    y = y + dy;

    requestAnimationFrame(updateCanvas);
}






