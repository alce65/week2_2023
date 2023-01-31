import { liveCycle } from './helpers.js';

const randomValue = () => (Math.random() > 0.5 ? 1 : 0);

export const randomBoard = (fil = 5, col = 5) => {
  const board = [];
  for (let i = 0; i < fil; i += 1) {
    board[i] = [];
    for (let j = 0; j < col; j += 1) {
      board[i][j] = randomValue();
    }
  }

  // Alternativa usando forEach (misma complejidad)
  //  const board = new Array(fil);
  //  board.forEach((_item, i) => {
  //    board[i] = new Array(col);
  //    // eslint-disable-next-line no-shadow
  //    board[i].forEach((_item, j) => {
  //      board[i][j] = randomValue();
  //    });
  //  });
  return board;
};

export const renderBoard = (initialBoard) => {
  console.clear();
  const board = liveCycle(initialBoard);
  console.table(board);
  return board;
};
