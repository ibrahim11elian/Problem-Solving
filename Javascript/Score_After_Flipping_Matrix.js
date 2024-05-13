// leet code challenge 'Score After Flipping Matrix'
// problem link https://leetcode.com/problems/score-after-flipping-matrix/description/

/**
 * Calculate the maximum score of a binary matrix by flipping rows and/or columns.
 * @param {number[][]} grid - The binary matrix.
 * @return {number} - The maximum score.
 */
var matrixScore = function (grid) {
  let COLS = grid[0].length,
    ROWS = grid.length;

  // Step 1: Flip rows if the first element of the row is 0
  for (let r = 0; r < ROWS; r++) {
    if (grid[r][0] === 0) {
      // Flip elements in the row
      for (let col = 0; col < COLS; col++) {
        grid[r][col] = grid[r][col] ? 0 : 1;
      }
    }
  }

  // Step 2: Flip columns if the number of zeros in a column is greater than half of the total rows
  for (let col = 0; col < COLS; col++) {
    let countZero = 0;
    // Count zeros in the column
    for (let r = 0; r < ROWS; r++) {
      if (grid[r][col] === 0) countZero++;
    }
    // If the number of zeros is greater than half of the rows, flip the column
    if (countZero > ROWS - countZero) {
      for (let r = 0; r < ROWS; r++) {
        grid[r][col] = grid[r][col] ? 0 : 1;
      }
    }
  }

  // Step 3: Calculate the score by summing up the decimal equivalents of each row
  let res = 0;
  for (let r = 0; r < ROWS; r++) {
    for (let col = 0; col < COLS; col++) {
      // If the element is 1, add 2^(COLS - col - 1) to the result
      if (grid[r][col] === 1) {
        res += Math.pow(2, COLS - col - 1);
      }
    }
  }

  return res; // Return the maximum score
};
