// leet code problem 'Remove Element'
// problem link https://leetcode.com/problems/remove-element/description/

/**
 * Removes all occurrences of a specific value from an array of numbers,
 * and returns the new length of the modified array.
 * @param {number[]} nums - The array of numbers.
 * @param {number} val - The value to be removed from the array.
 * @return {number} - The new length of the modified array.
 */
var removeElement = function (nums, val) {
  // Initialize a variable to keep track of the position where non-matching elements should be placed
  let k = 0;

  // Iterate through each element in the array using forEach
  nums.forEach((ele) => {
    // If the current element is not equal to the specified value
    if (ele !== val) {
      // Place the non-matching element at the current position (k) and increment k
      nums[k++] = ele;
    }
  });

  // Return the new length of the modified array (k represents the number of non-matching elements)
  return k;
};

console.log(removeElement([3, 2, 2, 3], 3));
