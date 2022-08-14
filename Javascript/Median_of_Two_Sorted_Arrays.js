
// leet code challenge 'Median of Two Sorted Arrays'
// problem link https://leetcode.com/problems/median-of-two-sorted-arrays/

// The overall run time complexity should be O(log (m+n)).

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    let twoLength = nums1.length + nums2.length;
    let twoArr = [...nums1, ...nums2];
    twoArr.sort((a, b) => a - b);
    return twoLength % 2 === 0 ? (twoArr[twoLength / 2] + twoArr[(twoLength / 2) - 1]) / 2 : twoArr[Math.floor(twoLength / 2)];
};

console.log(findMedianSortedArrays([1, 2], [3, 4]));