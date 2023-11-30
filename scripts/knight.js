import Board from "./board.js";

class Knight {
  constructor(start = null, end = null) {
    (this.start = start), (this.end = end);
  }

  startGame(start, end) {
    const board = new Board();
    board.createBoard();

    return this.checkValidity(start, end, board);
  }

  checkValidity(start, end, board) {
    if (
      !board.isValidSquare(start[0], start[1]) ||
      !board.isValidSquare(end[0], end[1])
    )
      throw new Error("Woops! Invalid starting or ending position.");
    return this.moveKnight(start, end, board);
  }

  moveKnight(start, end, board) {
    let moves = [start];
    while (moves.length !== 0) {
      let currentSquare = moves.shift();
      if (currentSquare[0] === end[0] && currentSquare[1] === end[1]) break;
      const nextSquare = board.getPossiblePath(
        currentSquare[0],
        currentSquare[1]
      );
      nextSquare.forEach((square) => {
        if (board.playedMove[square[0]][square[1]]) return;
        moves.push(square);
        board.playedMove[square[0]][square[1]] = true;
        board.lastSquare[square[0]][square[1]] = [
          currentSquare[0],
          currentSquare[1],
        ];
      });
    }
    return this.backtrack(start, end, board);
  }

  backtrack(start, end, board) {
    const path = [];
    let currentSquare = end;
    while (currentSquare[0] !== start[0] || currentSquare[1] !== start[1]) {
      path.unshift(currentSquare);
      currentSquare = board.lastSquare[currentSquare[0]][currentSquare[1]];
    }
    path.unshift(start);
    return this.printPath(path);
  }

  printPath(path) {
    console.log(
      `=> You made it in ${path.length} spec moves!  Here's your path:`
    );
    path.forEach((square) => console.log(square));
  }
}

export default Knight;
