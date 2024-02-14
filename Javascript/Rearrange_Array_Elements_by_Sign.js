// leet code challenge 'Rearrange Array Elements by Sign'
// problem link https://leetcode.com/problems/rearrange-array-elements-by-sign/description/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var rearrangeArray = function (nums) {
  let result = [];
  let p = 0,
    n = 1;
  nums.forEach((e) => {
    if (e < 0) {
      result[n] = e;
      n += 2;
    }
    if (e > 0) {
      result[p] = e;
      p += 2;
    }
  });

  return result;
};

console.log(rearrangeArray([3, 1, -2, -5, 2, -4]));
