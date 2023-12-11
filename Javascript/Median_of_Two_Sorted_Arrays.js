// leet code challenge 'Median of Two Sorted Arrays'
// problem link https://leetcode.com/problems/median-of-two-sorted-arrays/

// The overall run time complexity should be O(log (m+n)).

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  // Calculate the total length of the combined array
  let twoLength = nums1.length + nums2.length;

  // Combine the two arrays into a new array
  let twoArr = [...nums1, ...nums2];

  // Sort the combined array in ascending order
  twoArr.sort((a, b) => a - b);

  // Check if the total length is even or odd to determine the median
  return twoLength % 2 === 0
    ? (twoArr[twoLength / 2] + twoArr[twoLength / 2 - 1]) / 2 // If even, average the two middle elements
    : twoArr[Math.floor(twoLength / 2)]; // If odd, return the middle element
};
console.log(findMedianSortedArrays([1, 2], [3, 4]));
