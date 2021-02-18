export default class Cannon {
    constructor(game) {
        this.cannon = document.getElementById("cannon");
        this.pos = {
            x: game.lord.pos.x + 20,
            y: game.lord.pos.y + 50
        };
        this.speed = game.lord.facingLeft ? -80 : 80;
        this.size = {
            x: (game.gameWidth + game.gameHeight) / 90,
            y: (game.gameWidth + game.gameHeight) / 90
        };
        this.gameWidth = game.gameWidth;
        this.gameHeight = game.gameHeight;
        this.destroy = false;
    }

    update(dt) {
        this.pos.x += this.speed / dt;
        if(this.pos.x >= this.gameWidth - this.size || this.pos.x <= 0) this.destroy = true;
    }

    draw(ctx) {
        ctx.drawImage(this.cannon, this.pos.x, this.pos.y, this.size.x, this.size.y);
    }
}