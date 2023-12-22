// leet code challenge 'Rotate Array'
// problem link https://leetcode.com/problems/rotate-array/description/

/**
 * Rotate an array to the right by k steps using splice and unshift.
 * @param {number[]} nums - The array to rotate.
 * @param {number} k - The number of steps to rotate.
 * @return {number[]} - The rotated array.
 */
var rotate = function (nums, k) {
  // return the array if its length is equal to 1 or if k is 0
  if (nums.length <= 1 || k === 0) return nums;

  // update k to be less than or equal to the array length
  k = k % nums.length;

  // Extract the last k elements using splice and add them to the front of the array using unshift
  nums.unshift(...nums.splice(-k, k));
  return nums;
};

// Time Complexity: O(k + n), where k is the number of steps and n is the length of the array
// Space Complexity: O(k), additional space used for splice

console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3));

// ===============================================================================================

/**
 * Rotate an array to the right by k steps using unshift and pop in a loop.
 * @param {number[]} nums - The array to rotate.
 * @param {number} k - The number of steps to rotate.
 * @return {number[]} - The rotated array.
 */
var rotate = function (nums, k) {
  // return the array if its length is equal to 1 or if k is 0
  if (nums.length <= 1 || k === 0) return nums;

  // update k to be less than or equal to the array length
  k = k % nums.length;
  // Shift elements to the front one by one in a loop
  let i = nums.length - 1;
  while (k > 0) {
    nums.unshift(nums.pop());
    k--;
  }
  return nums;
};

// Time Complexity: O(k * n), where k is the number of steps and n is the length of the array
// Space Complexity: O(1), no additional space used

console.log(rotate([-1, -100, 3, 99], 2));

// ==============================================================================================

/**
 * Rotate an array to the right by k steps using an additional array.
 * @param {number[]} nums - The array to rotate.
 * @param {number} k - The number of steps to rotate.
 * @return {number[]} - The rotated array.
 */
var rotate = function (nums, k) {
  // return the array if its length is equal to 1 or if k is 0
  if (nums.length <= 1 || k === 0) return nums;

  // update k to be less than or equal to the array length
  k = k % nums.length;

  // Use an additional array to store rotated elements
  let result = [];
  let right = nums.length - 1;
  for (let i = 0, j = 0, len = nums.length; i < len; i++) {
    if (k !== 0) {
      result[i] = nums[right--];
      k--;
    } else {
      result[i] = nums[j++];
    }
  }
  return result;
};

// Time Complexity: O(n), where n is the length of the array
// Space Complexity: O(n), additional space used for the result array

console.log(rotate([-1], 2));

// ================================================================================================

/**
 * Rotate an array to the right by k steps by reversing the array in-place.
 * @param {number[]} nums - The array to rotate.
 * @param {number} k - The number of steps to rotate.
 * @return {number[]} - The rotated array.
 */
var rotate = function (nums, k) {
  // return the array if its length is equal to 1 or if k is 0
  if (nums.length <= 1 || k === 0) return nums;

  // update k to be less than or equal to the array length
  k = k % nums.length;

  // Function to reverse an array in-place
  const reverseArray = (arr, start, end) => {
    while (start < end) {
      [arr[start], arr[end]] = [arr[end], arr[start]];
      start++;
      end--;
    }
  };

  // Reverse the entire array
  reverseArray(nums, 0, nums.length - 1);

  // Reverse the first k elements
  reverseArray(nums, 0, k - 1);

  // Reverse the remaining elements
  reverseArray(nums, k, nums.length - 1);

  return nums;
};
// Time Complexity: O(n), where n is the length of the array
// Space Complexity: O(1), no additional space used

console.log(rotate([1, 2], 3));
