console.log("Script loaded");
const headerText = document.getElementById("header-text");
console.log(headerText);

headerText.innerText = "Welcome to the canvas element!";

changeHeaderText();

function changeHeaderText() {
    console.log("Changing header text");
    document.getElementById("header-text").innerText = "Welcome to the canvas element!";
}

const gameCanvas = document.getElementById('game-canvas');
const gameCtx = gameCanvas.getContext('2d');

let playerImg = new Image();
playerImg.src = '/Users/michaelanderson/Desktop/Nova/Images/gallary2.jpg';

let playerX = 50;
let playerY = gameCanvas.height / 2;
const playerWidth = 50;
const playerHeight = 50;
let playerSpeed = 5;

let obstacleX = gameCanvas.width;
let obstacleY = gameCanvas.height / 2;
const obstacleWidth = 20;
const obstacleHeight = 20;
let obstacleSpeed = 3;

let collision = false;

function drawPlayer() {
    if (playerImg.complete) {
        gameCtx.drawImage(playerImg, playerX, playerY, playerWidth, playerHeight);
    }
}

function drawObstacle() {
    gameCtx.fillStyle =  collision ? 'red' : 'grey';
    gameCtx.fillRect(obstacleX, obstacleY, obstacleWidth, obstacleHeight);
}

function moveObstacle() {
    obstacleX -= obstacleSpeed;
    if (obstacleX + obstacleWidth < 0) {
        obstacleX = gameCanvas.width;
        obstacleY = Math.random() * gameCanvas.height;
    }
}

function checkCollision() {
    if (playerX < obstacleX + obstacleWidth &&
        playerX + playerWidth > obstacleX &&
        playerY < obstacleY + obstacleHeight &&
        playerY + playerHeight > obstacleY
    ) {  
        collision = true;
    } 
}

function updateGameArea() {
    gameCtx.clearRect(0, 0, gameCanvas.width, gameCanvas.height);
    drawPlayer();
    drawObstacle();
    moveObstacle();
    checkCollision();
    requestAnimationFrame(updateGameArea);
}

document.addEventListener('keydown', function(event) {
    if (event.key === 'w' && playerY > 0) {
        playerY -= playerSpeed;
    } else if (event.key === 's' && playerY + playerHeight < gameCanvas.height) {
        playerY += playerSpeed;
    }
});

updateGameArea();