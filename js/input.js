export default class InputHandler {
    constructor(game) {
        document.addEventListener('keydown', (event)=>{
            //alert(event.keyCode);
            switch(event.keyCode) {
                case 65:
                    game.lord.moveLeft();
                    break;
                case 68:
                    game.lord.moveRight();
                    break;
                case 32:
                    game.lord.jump();
                    break;
                case 74:
                    game.lord.fire();
                    break;
            }
        });
        document.addEventListener('keyup', (event)=>{
            switch(event.keyCode) {
                case 65:
                    if(game.lord.speed.x < 0)
                        game.lord.stop();
                    break;
                case 68:
                    if(game.lord.speed.x > 0)
                        game.lord.stop();
                    break;
                case 74:
                    break;
            }
        });
    }
}