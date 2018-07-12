function addBall() {
    var ball = document.createElement("div");
    ball.setAttribute("class", "ball");

    //Generating Random Position
    var positionX = Math.floor(Math.random() * 500);
    var positionY = Math.floor(Math.random() * 400);

    ball.setAttribute("style", "left:" + positionX + "px; top:" + positionY + "px;");

    ball.setAttribute("onclick", "remove(this)");

    document.body.appendChild(ball);
}

function remove(ball) {
    document.body.removeChild(ball);
    var audio = document.getElementById("audio");
    audio.play();
}

function startGame() {
    setInterval(addBall, 1000);
}