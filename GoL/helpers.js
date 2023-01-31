// Previous version: complexity 8
// export const findNeighborPositions = (i = 0, j = 0, array = []) => {
//   // posiciones al rededor de (i,j)
//   // array[i-1][j-1],array[i-1][j],array[i-1][j+1],
//   // array[i][j-1],array[i][j],array[i][j+1],
//   // array[i+1][j-1],array[i+1][j],array[i+1][j+1]
//   if (!array.length) return [];
//   const max = array.length - 1;
//   const possiblePositions = [
//     [i - 1, j - 1],
//     [i - 1, j],
//     [i - 1, j + 1],
//     [i, j - 1],
//     [i, j + 1],
//     [i + 1, j - 1],
//     [i + 1, j],
//     [i + 1, j + 1],
//   ];
//   return possiblePositions.filter(
//     (item) => item[0] >= 0 && item[1] >= 0 && item[0] <= max && item[1] <= max
//   );
// };

const filterValidPosition = (item, maxFil, maxCol) =>
  item[0] >= 0 && item[1] >= 0 && item[0] <= maxFil && item[1] <= maxCol;

export const findNeighborPositions = (i = 0, j = 0, array = []) => {
  // posiciones al rededor de (i,j)
  // array[i-1][j-1],array[i-1][j],array[i-1][j+1],
  // array[i][j-1],array[i][j],array[i][j+1],
  // array[i+1][j-1],array[i+1][j],array[i+1][j+1]
  if (!array.length) return [];
  const maxFil = array.length - 1;
  const maxCol = array[0].length - 1;
  const possiblePositions = [
    [i - 1, j - 1],
    [i - 1, j],
    [i - 1, j + 1],
    [i, j - 1],
    [i, j + 1],
    [i + 1, j - 1],
    [i + 1, j],
    [i + 1, j + 1],
  ];

  return possiblePositions.filter((item) =>
    filterValidPosition(item, maxFil, maxCol)
  );
};

// Previous version: complexity 6
// export function countAliveNeighbors(i = 0, j = 0, array = []) {
//   if (!array.length) return 0;
//   const validPositions = findNeighborPositions(i, j, array);
//   const values = validPositions.map((item) => array[item[0]][item[1]]);
//   return values.reduce((a, b) => a + b);
// }

const positionsToValues = (positions, array) =>
  positions.map((item) => array[item[0]][item[1]]);

export const countAliveNeighbors = (i = 0, j = 0, array = []) => {
  if (!array.length) return 0;
  const validPositions = findNeighborPositions(i, j, array);
  const values = positionsToValues(validPositions, array);
  return values.reduce((a, b) => a + b);
};

// Previos version: complexity 9
// export function willBeAlive(i = 0, j = 0, array = []) {
//   if (!array.length) return 0;
//   const countValidCells = countAliveNeighbors(i, j, array);
//   if (array[i][j] === 1) {
//     // starting alive
//     return countValidCells > 2 && countValidCells <= 3 ? 1 : 0;
//   }
//   // starting dead
//   return countValidCells >= 3 ? 1 : 0;
// }

const forLiveCells = (countValidCells) =>
  countValidCells > 2 && countValidCells <= 3 ? 1 : 0;

const forDeadCells = (countValidCells) => (countValidCells >= 3 ? 1 : 0);

export const willBeAlive = (i = 0, j = 0, array = []) => {
  if (!array.length) return 0;
  const countValidCells = countAliveNeighbors(i, j, array);
  return array[i][j] === 1
    ? // starting alive
      forLiveCells(countValidCells)
    : // starting dead
      forDeadCells(countValidCells);
};

export const liveCycle = (array) => {
  // localArray = array.map(item => [...item])
  const localArray = array.map((item, i) =>
    item.map((_item, j) => willBeAlive(i, j, array))
  );
  return localArray;
};
