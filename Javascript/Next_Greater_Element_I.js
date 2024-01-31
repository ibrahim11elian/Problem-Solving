// leet code challenge 'Next Greater Element I'
// problem link https://leetcode.com/problems/next-greater-element-i/description/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
  const result = new Array(nums1.length).fill(-1);
  const stack = [];
  const map = new Map();
  for (let i = 0, len = nums1.length; i < len; i++) {
    map.set(nums1[i], i);
  }

  for (let i = 0, len = nums2.length; i < len; i++) {
    while (stack.length && nums2[i] > nums2[stack[stack.length - 1]]) {
      // Pop the index at the top of the stack
      const idx = stack.pop();
      result[map.get(nums2[idx])] = nums2[i];
    }
    if (map.has(nums2[i])) {
      // Push the current index onto the stack
      stack.push(i);
    }
  }
  return result;
};
