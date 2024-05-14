// leet code challenge 'Difference Between Ones and Zeros in Row and Column'
// problem link https://leetcode.com/problems/difference-between-ones-and-zeros-in-row-and-column/description/

/**
 * @param {number[][]} grid
 * @return {number[][]}
 */
var onesMinusZeros = function (grid) {
  let ROW = grid.length,
    COL = grid[0].length;
  let diff = Array.from({ length: ROW }, () => Array(COL).fill(0));
  let onesRow = new Array(ROW).fill(0);
  let onesCol = new Array(COL).fill(0);

  // Traverse Rows To Calculate The Number Of Ones
  for (let row = 0; row < ROW; row++) {
    for (let col = 0; col < COL; col++) {
      if (grid[row][col]) onesRow[row]++;
    }
  }

  // Traverse Columns To Calculate The Number Of Ones
  for (let col = 0; col < COL; col++) {
    for (let row = 0; row < ROW; row++) {
      if (grid[row][col]) onesCol[col]++;
    }
  }

  // Traverse Diff Matrix And Fill it With The Values
  for (let row = 0; row < ROW; row++) {
    for (let col = 0; col < COL; col++) {
      diff[row][col] =
        onesRow[row] +
        onesCol[col] -
        (ROW - onesRow[row]) -
        (COL - onesCol[col]);
    }
  }

  return diff;
};
