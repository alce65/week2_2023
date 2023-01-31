import {
  findNeighborPositions,
  countAliveNeighbors,
  willBeAlive,
  liveCycle,
} from './helpers';

// First test version
// describe('Given findNeighborPositions function', () => {
//   describe('When the array is 3 x 3', () => {
//     let array;
//     beforeAll(() => {
//       array = [
//         [1, 1, 1],
//         [1, 1, 1],
//         [1, 1, 1],
//       ];
//     });
//     describe('but there are not parameters for the function', () => {
//       test('It should return and empty array', () => {
//         expect(findNeighborPositions()).toEqual([]);
//       });
//     });
//     describe('And the coordinates are 1,1', () => {
//       test('returned valid neighbors should be an array of 8 items', () => {
//         // arrange
//         const coordinates = [1, 1];
//         // act
//         const result = findNeighborPositions(...coordinates, array);
//         // assert
//         expect(result.length).toBe(8);
//       });
//     });
//     describe('And the coordinates are 0,0', () => {
//       test('returned valid neighbors should be an array of 3 items', () => {
//         // arrange
//         const coordinates = [0, 0];
//         // act
//         const result = findNeighborPositions(...coordinates, array);
//         // assert
//         expect(result.length).toBe(3);
//       });
//     });
//     describe('And the coordinates are 2,2', () => {
//       test('returned valid neighbors should be an array of 3 items', () => {
//         // arrange
//         const coordinates = [2, 2];
//         // act
//         const result = findNeighborPositions(...coordinates, array);
//         // assert
//         expect(result.length).toBe(3);
//       });
//     });
//   });
// });

describe('Given findNeighborPositions function', () => {
  describe('When it is call without parameters', () => {
    test('Then it should return an empty array', () => {
      expect(findNeighborPositions()).toEqual([]);
    });
  });
  describe('When the array is 3 x 3', () => {
    const array = [
      [1, 1, 1],
      [1, 1, 1],
      [1, 1, 1],
    ];
    const testValues = [
      [0, 0, 3],
      [0, 1, 5],
      [0, 2, 3],
      [1, 0, 5],
      [1, 1, 8],
      [1, 2, 5],
      [2, 0, 3],
      [2, 1, 5],
      [2, 2, 3],
    ];
    describe.each(testValues)(
      'And the coordinates are %i,%i',
      (i, j, expected) => {
        test(`returned valid neighbors should be ${expected}`, () => {
          // act
          const result = findNeighborPositions(i, j, array);
          // assert
          expect(result.length).toBe(expected);
        });
      }
    );
  });
  describe('When the array is 3 x 5 (not square)', () => {
    const array = [
      [1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1],
    ];
    const testValues = [
      [0, 0, 3],
      [0, 1, 5],
      [0, 2, 5],
      [0, 3, 5],
      [0, 4, 3],
      [1, 0, 5],
      [1, 1, 8],
      [1, 2, 8],
      [1, 3, 8],
      [1, 4, 5],
      [2, 0, 3],
      [2, 1, 5],
      [2, 2, 5],
      [2, 3, 5],
      [2, 4, 3],
    ];
    describe.each(testValues)(
      'And the coordinates are %i,%i',
      (i, j, expected) => {
        test(`returned valid neighbors should be ${expected}`, () => {
          // act
          const result = findNeighborPositions(i, j, array);
          // assert
          expect(result.length).toBe(expected);
        });
      }
    );
  });
});

describe('Given countAliveNeighbors function', () => {
  describe('When it is call without parameters', () => {
    test('Then it should return 0', () => {
      expect(countAliveNeighbors()).toBe(0);
    });
  });
  describe('When the array is 5 x 5', () => {
    const array = [
      [1, 0, 1, 0, 1],
      [0, 1, 0, 1, 0],
      [1, 0, 1, 0, 1],
      [1, 1, 1, 1, 1],
      [0, 0, 0, 0, 0],
    ];
    const testValues = [
      [0, 0, 1],
      [0, 1, 3],
      [0, 2, 2],
      [1, 2, 4],
      [1, 3, 4],
      [1, 4, 3],
      [2, 2, 5],
      [3, 1, 4],
      [4, 2, 3],
    ];
    describe.each(testValues)(
      'And the coordinates are %i,%i',
      (i, j, expected) => {
        test(`returned sum of alive neighbors should be ${expected}`, () => {
          // act
          const result = countAliveNeighbors(i, j, array);
          // assert
          expect(result).toBe(expected);
        });
      }
    );
  });
});

describe('Given willBeAlive function', () => {
  describe('When it is call without parameters', () => {
    test('Then it should return 0', () => {
      expect(willBeAlive()).toBe(0);
    });
  });
  describe('When the array is 5 x 5', () => {
    const array = [
      [1, 0, 1, 0, 1],
      [0, 1, 0, 1, 0],
      [1, 0, 1, 0, 1],
      [1, 1, 1, 0, 0],
      [0, 0, 0, 0, 0],
    ];
    const testValues = [
      [0, 0, 0],
      [0, 1, 1],
      [0, 2, 0],
      [1, 2, 1],
      [1, 3, 0],
      [1, 4, 1],
      [2, 2, 0],
      [3, 1, 0],
      [4, 2, 0],
      [4, 4, 0],
    ];
    describe.each(testValues)(
      'And the coordinates are %i,%i',
      (i, j, expected) => {
        test(`returned alive state should be ${expected}`, () => {
          // act
          const result = willBeAlive(i, j, array);
          // assert
          expect(result).toBe(expected);
        });
      }
    );
  });
});

describe('Given liveCycle function', () => {
  describe('When the array is 3 x 3', () => {
    const array = [
      [1, 1, 1],
      [1, 1, 1],
      [1, 1, 1],
    ];
    const expected = [
      [1, 0, 1],
      [0, 0, 0],
      [1, 0, 1],
    ];
    test('result should be a new array 3 x 3', () => {
      // act
      const result = liveCycle(array);
      // assert
      expect(result).toEqual(expected);
    });
  });
});
