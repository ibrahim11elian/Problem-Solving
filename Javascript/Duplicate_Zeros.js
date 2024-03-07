// leet code challenge 'Duplicate Zeros'
// problem link https://leetcode.com/problems/duplicate-zeros/description/

/**
 * Function to duplicate zeros in an array in-place.
 * @param {number[]} arr - The input array.
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function (arr) {
  // Create a copy of the input array
  let x = [...arr];

  // Loop through the elements of the input array
  for (let i = 0, j = 0; i < arr.length; i++) {
    // Check if the current element in the copy is 0
    if (x[j] === 0) {
      // If the next element to be replaced is the last element, don't replace it
      i === arr.length - 1 ? null : (arr[i + 1] = 0);
      // Replace the current element with 0
      arr[i] = 0;
      // Increment i to skip the next element (already set to Zero) in the original array
      i++;
    } else {
      // If the current element in the copy is not 0, copy it to the original array
      arr[i] = x[j];
    }
    // Move to the next element in the copy
    j++;
  }
};
