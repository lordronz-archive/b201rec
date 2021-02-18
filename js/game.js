import Lord from "/js/lord.js";
import InputHandler from "/js/input.js";
import { buildLevel, level1, level2, level3, level4, level5, level6, generateText, strLevel } from "/js/levels.js";

const GAME_STATE = {
    PAUSED: 0,
    RUNNING: 1,
    MENU: 2,
    GAMEOVER: 3,
    NEWLEVEL: 4
};

export default class Game {
    constructor(gameWidth, gameHeight) {
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;
        new InputHandler(this);
        this.lord = new Lord(this);
        this.levels = [level1, level2, level3, level4, level5, level6];
        this.leveltext = strLevel;
        this.curLevel = 0;
    }
    start() {
        this.gameState = GAME_STATE.RUNNING;
        this.lord.reset();
        this.bricks = buildLevel(this, this.levels[this.curLevel]);
    }
    update(dt) {
        this.lord.update(dt);
        this.bricks.forEach(brick=> {
            brick.update(dt)
        });
        this.bricks = this.bricks.filter(brick=>!brick.destroy);
        if(this.lord.pos.x >= this.gameWidth) {
            ++this.curLevel;
            this.start();
        }
    }
    draw(ctx) {
        ctx.clearRect(0, 0, this.gameWidth, this.gameHeight);
        generateText(this, ctx, this.leveltext[this.curLevel]);
        this.bricks.forEach(brick => {
            brick.draw(ctx)
        });
        this.lord.draw(ctx);
    }
}