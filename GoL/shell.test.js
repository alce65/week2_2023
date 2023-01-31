const { randomBoard, renderBoard } = require('./shell');

describe('Given randomBoard', () => {
  describe('When its invocated without arguments', () => {
    test('Then it should return a 5x5 array', () => {
      // act
      const r = randomBoard();
      // assert
      expect(r.length).toBe(5);
      expect(r[0].length).toBe(5);
    });
  });
  describe('When its invocated with arguments m & n', () => {
    test('Then it should return a mxn array', () => {
      // act
      const r = randomBoard(10, 12);
      // assert
      expect(r.length).toBe(10);
      expect(r[0].length).toBe(12);
    });
  });
});

describe('Given renderBoard', () => {
  describe('When its invocated with a initial board', () => {
    test('Then it should console and return a new board', () => {
      // arrange
      const initialBoard = [
        [1, 0, 1, 0, 1],
        [0, 1, 0, 1, 0],
        [1, 0, 1, 0, 1],
        [1, 1, 1, 0, 0],
        [0, 0, 0, 0, 0],
      ];
      // act
      const r = renderBoard(initialBoard);
      // assert
      expect(r.length).toBe(initialBoard.length);
      expect(r[0].length).toBe(initialBoard[0].length);
      expect(r).not.toEqual(initialBoard);
    });
  });
});
