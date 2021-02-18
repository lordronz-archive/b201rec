export function detectCollision(brick, object) {
    // let top = brick.position.y;
    // let bot = top + brick.size;
    // let objectTop = object.position.y;
    // let objectBottom = objectTop + object.height;
    // let tipLeft = brick.position.x;
    // let tipRight = brick.position.x + brick.size;
    // let tipLeftObject = object.position.x;
    // let tipRightObject = tipLeftObject + object.width;

    // return bot >= objectTop && top <= objectBottom && (tipLeft >= tipLeftObject && tipRight <= tipRightObject);
    let leftBrick = brick.pos.x;
    let rightBrick = leftBrick + brick.size.x;
    let leftObject = object.pos.x;
    let rightObject = leftObject + object.size.x;
    let topBrick = brick.pos.y;
    let botBrick = topBrick + brick.size.y;
    let topObject = object.pos.y;
    let botObject = topObject + object.size.y;
    if(brick.size.y < object.size.y)
        return leftObject <= rightBrick && rightObject >= leftBrick && (botObject >= topBrick && topObject <= botBrick);
    //return leftObject <= rightBrick && rightObject >= leftBrick && topObject >= topBrick && botObject <= botBrick;
    return leftObject <= rightBrick && rightObject >= leftBrick && (botObject >= topBrick && topObject <= botBrick);
}