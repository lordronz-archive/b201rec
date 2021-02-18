import Game from "/js/game.js";

let canvas = document.getElementById("gameScreen");
let ctx = canvas.getContext("2d");
const GAME_WIDTH = ctx.canvas.width;
const GAME_HEIGHT = ctx.canvas.height;

let game = new Game(GAME_WIDTH, GAME_HEIGHT);
game.start();
let lastTime = 0;

function gameLoop(timestamp) {
    let dt = timestamp - lastTime;
    lastTime = timestamp;

    game.update(dt);
    game.draw(ctx);
    
    requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);