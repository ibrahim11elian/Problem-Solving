// leet code challenge 'Merge Sorted Array'
// problem link https://leetcode.com/problems/merge-sorted-array/

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
// Define a function 'merge' that takes two sorted arrays ('nums1' and 'nums2')
// and their respective lengths ('m' and 'n') as parameters.
var merge = function (nums1, m, nums2, n) {
  // Initialize variables:
  // 'x' represents the index where the next element will be placed in the merged array.
  let x = m + n - 1;

  // 'y' represents the current index in the first array ('nums1').
  let y = m - 1;

  // 'z' represents the current index in the second array ('nums2').
  let z = n - 1;

  // Iterate through the second array ('nums2') and merge its elements into the first array ('nums1').
  while (z >= 0) {
    // If the current element in 'nums2' is greater than the current element in 'nums1',
    // place the element from 'nums2' into the merged array and move to the previous indices.
    if (nums2[z] > nums1[y]) {
      nums1[x] = nums2[z];
      z--;
      x--;
    } else {
      // If the current element in 'nums2' is less than or equal to the current element in 'nums1',
      // shift elements in 'nums1' to make space for the element from 'nums2'.
      while (nums2[z] <= nums1[y]) {
        nums1[x] = nums1[y];
        x--;
        y--;
      }

      // Place the element from 'nums2' into the merged array and move to the previous indices.
      nums1[x] = nums2[z];
      x--;
      z--;
    }
  }
};

merge([4, 5, 6, 0, 0, 0], 3, [1, 2, 3], 3);
