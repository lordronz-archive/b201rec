import { detectCollision } from "/js/collisionDetection.js";

export default class Brick{
    constructor(game, pos) {
        this.brick = document.getElementById("brick");
        this.gameWidth = game.gameWidth;
        this.gameHeight = game.gameHeight;
        this.pos = pos;
        this.width = 80;
        this.height = 24;
        this.size = {
            x: this.width,
            y: this.height
        };
        this.game = game;
        this.destroy = false;
    }

    update(dt) {
        if(detectCollision(this, this.game.lord)) {
            //this.game.lord.pos.x = this.pos.x - 1 - this.game.lord.size.x;
            this.game.lord.pos.x -= this.game.lord.speed.x / dt;
        }
        this.game.lord.cannons.forEach(cannon => {
            if(detectCollision(this, cannon)) {
                this.destroy = true;
                cannon.destroy = true;
            }
        });
    }

    draw(ctx) {
        ctx.drawImage(this.brick, this.pos.x, this.pos.y, this.width, this.height);
    }
}