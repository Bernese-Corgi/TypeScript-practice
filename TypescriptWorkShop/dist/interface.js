const myTV = {
    turnOn() {
    },
    turnOff() {
        return true;
    },
};
function tryTurnOn(tv) {
    tv.turnOn();
}
tryTurnOn(myTV);
function createBoard() {
    const cells = [];
    for (let row = 0; row < 4; row++) {
        for (let col = 0; col < 3; col++) {
            cells.push({
                row: row,
                col: col,
            });
        }
    }
    return cells;
}
const board = createBoard();
board[0].piece = {
    move(from, to) {
        return true;
    },
};
console.log(board);
//# sourceMappingURL=interface.js.map