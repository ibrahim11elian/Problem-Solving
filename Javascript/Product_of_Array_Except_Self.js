// leet code challenge 'Product of Array Except Self'
// problem link https://leetcode.com/problems/product-of-array-except-self/description/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  let len = nums.length;
  let result = Array(len).fill(1);

  let pre = 1;
  for (let i = 0; i < len; i++) {
    result[i] = pre;
    pre *= nums[i];
  }
  let post = 1;
  for (let i = len - 1; i >= 0; i--) {
    result[i] *= post;
    post *= nums[i];
  }

  return result;
};

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  let len = nums.length;
  let left = [nums[0]];
  let right = [nums[len - 1]];
  for (let i = 1; i < len; i++) {
    left.push(nums[i] * left[left.length - 1]);
  }
  for (let i = len - 2; i >= 0; i--) {
    right.unshift(nums[i] * right[0]);
  }
  let result = nums.map((_, i) => {
    if (i === 0) return right[i + 1];
    if (i === len - 1) return left[i - 1];
    return left[i - 1] * right[i + 1];
  });

  return result;
};

console.log(productExceptSelf([1, 2, 3, 4]));
