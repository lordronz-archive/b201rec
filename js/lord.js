import Cannon from "/js/cannon.js";
import { detectCollision } from "/js/collisionDetection.js";

export default class Lord {
    constructor(game) {
        this.lord = document.getElementById("lord");
        this.game = game;
        this.sz = 1.5;
        this.lordWidth = this.lord.naturalWidth;
        this.lordHeight = this.lord.naturalHeight;
        this.smolWidth = this.lordWidth / 4;
        this.smolHeight = this.lordHeight / 3;
        this.size = {
            x: this.lordWidth * this.sz,
            y: this.lordHeight * this.sz
        };
        this.floorHeight = this.game.gameHeight - this.lordHeight * this.sz - 25;
        this.pos = {
            x: 0,
            y: this.floorHeight
        };
        this.speed = {
            x: 0,
            y: 0
        };
        this.maxSpeed = {
            x: 35,
            y: 35
        };
        this.maxHeight = 85;
        this.ithSprite = 0;
        this.jthSprite = 0;
        this.animationCounter = 1;
        this.jumped = false;
        this.facingLeft = false;
        this.cannons = [];
        this.canFire = 0;
        this.justFiring = false;
    }

    reset() {
        this.pos = {
            x: 0,
            y: this.pos.y
        };
    }

    stop() {
        this.speed.x = 0;
        this.animationCounter = 1;
        this.facingLeft = false;
        //stop, you've violated the law
        //then pay with your blood
    }

    moveLeft() {
        this.speed.x = -this.maxSpeed.x;
        this.facingLeft = true;
    }

    moveRight() {
        this.speed.x = this.maxSpeed.x;
        //++this.animationCounter;
        this.facingLeft = false;
    }

    jump() {
        if(!this.jumped) {
            this.speed.y = -this.maxSpeed.y;
            this.jumped = true;
        }
    }

    fall() {
        if(this.jumped) {
            this.speed.y = this.maxSpeed.y;
        }
    }

    fire() {
        if(this.canFire < 30) return;
        this.justFiring = true;
        this.cannons.push(new Cannon(this.game));
    }

    update(dt) {
        if(!dt) return;
        this.pos.x += this.speed.x / dt;
        this.pos.y += this.speed.y / dt;
        if(this.pos.x <= 0) this.pos.x = 1;
        if(this.pos.y < this.floorHeight - this.maxHeight) this.fall();
        if(this.pos.y >= this.floorHeight) {
            this.speed.y = 0;
            this.pos.y = this.floorHeight;
            this.jumped = false;
        }
        if(this.speed.x == 0) {
            this.ithSprite = 0;
            this.jthSprite = 0;
        }
        else if(this.speed.x > 0) {
            this.animationCounter++;
            if(this.animationCounter > 20) {
                if(this.animationCounter > 30) {
                    this.animationCounter = 1;
                }
                this.ithSprite = 1;
                this.jthSprite = 2;
            }
            else if(this.animationCounter > 10) {
                this.ithSprite = 1;
                this.jthSprite = 1;
            }
            else {
                this.ithSprite = 1;
                this.jthSprite = 0;
            }
        }
        else if(this.speed.x < 0) {
            this.animationCounter++;
            if(this.animationCounter > 20) {
                if(this.animationCounter > 30) {
                    this.animationCounter = 1;
                }
                this.ithSprite = 3;
                this.jthSprite = 2;
            }
            else if(this.animationCounter > 10) {
                this.ithSprite = 3;
                this.jthSprite = 1;
            }
            else {
                this.ithSprite = 3;
                this.jthSprite = 0;
            }
        }
        ++this.canFire;
        if(this.justFiring) {
            this.canFire = 0;
            this.justFiring = false;
        }
        this.cannons.forEach(cannon => cannon.update(dt));
        this.cannons = this.cannons.filter(cannon=>!cannon.destroy);
    }

    draw(ctx) {
        this.cannons.forEach(cannon => cannon.draw(ctx));
        ctx.drawImage(this.lord, this.ithSprite * this.smolWidth, this.jthSprite * this.smolHeight, this.smolWidth, this.smolHeight, this.pos.x, this.pos.y, this.lordWidth * this.sz, this.lordHeight * this.sz);
    }
}