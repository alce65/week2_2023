import { randomBoard, renderBoard } from './shell.js';

// Alternativo inicio fijo
// const initialBoard = [
//   [1, 0, 1, 0, 1],
//   [0, 1, 0, 1, 0],
//   [1, 0, 1, 0, 1],
//   [1, 1, 1, 1, 1],
//   [0, 0, 0, 0, 0],
// ];

const interval = 1000;
const initialBoard = randomBoard(5, 10);
let board = renderBoard(initialBoard);

setInterval(() => {
  board = renderBoard(board);
}, interval);
