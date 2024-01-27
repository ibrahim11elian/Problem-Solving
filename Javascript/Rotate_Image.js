// leet code challenge 'Rotate Image'
// problem link https://leetcode.com/problems/rotate-image/description/

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  // Get the number of rows in the matrix
  let row = matrix.length;

  // Transpose the matrix
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < i; j++) {
      // Swap elements across the diagonal
      let temp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = temp;
    }
  }

  // Reverse each row of the transposed matrix
  for (let i = 0; i < row; i++) {
    matrix[i].reverse();
  }
};

let matrix = [
  [5, 1, 9, 11],
  [2, 4, 8, 10],
  [13, 3, 6, 7],
  [15, 14, 12, 16],
];

rotate(matrix);

console.log(matrix);
