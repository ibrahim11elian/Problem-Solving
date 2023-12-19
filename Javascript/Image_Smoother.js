// leet code challenge 'Image Smoother'
// problem link https://leetcode.com/problems/image-smoother/description/

/**
 * @param {number[][]} img
 * @return {number[][]}
 */
var imageSmoother = function (img) {
  // Initialize the result array with a copy of the input image.
  const result = [];

  // Iterate through each row of the input image.
  for (let i = 0, m = img.length; i < m; i++) {
    // Initialize a new row for the result array.
    result[i] = [];

    // Iterate through each column of the current row.
    for (let j = 0, n = img[i].length; j < n; j++) {
      // Initialize counters for sum and the number of pixels in the neighborhood.
      let counter = 0;
      let sum = 0;

      // Iterate over the 3x3 neighborhood around the current pixel.
      for (let x = Math.max(0, i - 1); x <= Math.min(m - 1, i + 1); x++) {
        for (let y = Math.max(0, j - 1); y <= Math.min(n - 1, j + 1); y++) {
          // Accumulate the sum of pixel values and increment the counter.
          sum += img[x][y];
          counter++;
        }
      }

      // Calculate the average and round down to the nearest integer.
      result[i][j] = Math.floor(sum / counter);
    }
  }

  // Return the smoothed image.
  return result;
};

console.log(
  imageSmoother([
    [100, 200, 100],
    [200, 50, 200],
    [100, 200, 100],
  ])
);
console.log(
  imageSmoother([
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1],
  ])
);
