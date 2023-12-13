// leet code challenge 'Container With Most Water'
// problem link https://leetcode.com/problems/container-with-most-water/description/

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let size = 0; // Initializing the maximum area
  let i = 0,
    len = height.length,
    j = len - 1; // Initializing pointers

  // Loop until the pointers meet
  while (i < j) {
    // Calculate the current area between the lines at positions i and j
    let currentSize = Math.min(height[i], height[j]) * (j - i);
    // Update the maximum area if the current area is greater
    size = Math.max(size, currentSize);

    // Move the pointers based on the height of the walls
    if (height[i] < height[j]) i++;
    else j--;
  }
  // Return the maximum area
  return size;
};

console.log(maxArea([1, 1]));
