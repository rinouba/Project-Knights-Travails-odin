class Board {
  constructor(size = 8, playedMove = [], lastSquare = []) {
    (this.size = size),
      (this.playedMove = playedMove),
      (this.lastSquare = lastSquare);
  }
  createBoard() {
    let size = this.size;
    let playedMove = this.playedMove;
    let lastSquare = this.lastSquare;
    for (let i = 0; i < size; i++) {
      let row = [];
      for (let j = 0; j < size; j++) {
        row.push(false);
      }
      playedMove.push(row);
      lastSquare.push(row);
    }
  }

  isValidSquare(row, col) {
    let size = this.size;
    return row >= 0 && row < size && col >= 0 && col < size;
  }

  getPossiblePath(row, col) {
    const possibilities = [
      [1, 2],
      [2, 1],
      [2, -1],
      [1, -2],
      [-1, -2],
      [-2, -1],
      [-2, 1],
      [-1, 2],
    ];
    return possibilities
      .map((square) => [row + square[0], col + square[1]])
      .filter((square) => this.isValidSquare(square[0], square[1]));
  }
}

export default Board;
