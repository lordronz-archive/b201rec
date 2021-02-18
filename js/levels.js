import Brick from "/js/brick.js";

export function buildLevel(game, level) {
    let bricks = [];
    level.forEach((row, rowIndex) => {
        row.forEach((brick, brickIndex) => {
            if(brick === 1) {
                let position = {
                    x: 80 * brickIndex,
                    y: game.gameHeight - 24 * (rowIndex + 1)
                };
                bricks.push(new Brick(game, position));
            }
        });
    });
    return bricks;
}

export const level1 = [
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [0,0,0,0,0,0,0,0,0,0,0,1,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,1,0,0],    
    [0,0,0,0,0,0,0,0,0,0,0,1,0,0],    
    [0,0,0,0,0,0,0,0,0,0,0,1,0,0],    
    [0,0,0,0,0,0,0,0,0,0,0,1,0,0]
];

export const level2 = [
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [0,0,0,0,0,0,0,0,0,0,1,1,1,0],
    [0,0,0,0,0,0,0,0,0,0,1,1,1,0],    
    [0,0,0,0,0,0,0,0,0,0,0,1,1,0],    
    [0,0,0,0,0,0,0,0,0,0,0,1,1,0],    
    [0,0,0,0,0,0,0,0,0,0,0,1,0,0]
];

export const level3 = [
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [0,0,0,0,0,0,1,1,0,0,0,1,1,0],
    [0,0,0,0,0,0,1,1,0,0,0,1,1,1],    
    [0,0,0,0,0,0,0,0,0,0,0,1,1,1],    
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0],    
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0]
];

export const level4 = [
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [0,0,0,0,1,0,0,0,0,1,1,1,1,1],
    [0,0,0,0,1,0,0,0,0,1,1,1,1,1],
    [0,0,0,0,1,0,0,0,0,1,0,1,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,1,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,1,0,0]
];

export const level5 = [
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [0,0,0,1,1,1,1,0,0,1,1,1,0,0],
    [0,0,0,1,1,1,1,0,0,1,1,1,0,0],
    [0,0,0,1,1,1,0,0,0,1,1,1,0,0],
    [0,0,0,0,0,0,0,0,0,1,0,1,0,0],
    [0,0,0,0,0,0,0,0,0,1,0,1,0,0]
];

export const level6 = [
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [0,0,0,0,0,1,0,1,0,1,0,1,1,1],
    [0,0,0,0,0,0,1,0,1,0,0,1,1,1],
    [0,0,0,0,0,1,0,1,0,1,0,1,1,1],
    [0,0,0,0,0,0,1,0,1,0,0,1,0,0],
    [0,0,0,0,0,1,0,1,0,1,0,1,0,0],
    [0,0,0,0,0,0,0,1,0,0,0,0,0,0]
];

export const strLevel = [
    "BACA YA\nAaron Christopher Tanhar\n07211940000055\nIni adalah video untuk berkas oprec B201\nSit back, relax, and enjoy the music XD",

    "Saya lahir di usia yang sangat muda\nHobi saya adalah \"baca\" reddit\n",

    "Game yang dibuat pake HTML, CSS, sama JS ini\nsaya buat khusus untuk video ini\nYak game ini emang jelek, silahkan hujat saya",

    "Oh berarti mau masuk game development ya?\nNope, saya enjoy bikin game ini\nTapi saya lebih tertarik dengan network and security",

    "Dan alasan saya bergabung dengan b201 adalah\nSupaya lebih jago hehe",

    "Sekian video perkenalannya\nLanjut ke pantun\nSorry kalo gaje\nSorry croppingnya jelek\nMamlez ngemdit"
];

export function generateText(game, ctx, str) {
    let line = str.split("\n");
    let lineHeight = 50;
    let y = game.gameHeight / 2 - lineHeight * line.length / 2;
    ctx.font = lineHeight.toString() + "px Times New Roman";
    ctx.fillStyle = "black";
    ctx.textAlign = "center";
    for(let i = 0; i < line.length; ++i) {
        ctx.fillText(line[i], game.gameWidth / 2, y);
        y += lineHeight;
    }
    //ctx.fillText(str, game.gameWidth / 2, game.gameHeight / 2);
}