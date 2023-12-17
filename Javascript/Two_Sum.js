// leet code challenge 'Two Sum'
// problem link https://leetcode.com/problems/two-sum/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function twoSum(nums, target) {
  let hash = new Map();
  let solutionList = [];

  nums.forEach((ele, i) => hash.set(ele, i));

  for (let i = 0, len = nums.length; i < len; i++) {
    let remaining = target - nums[i];
    if (hash.has(remaining)) {
      const index = hash.get(remaining);
      if (index !== i) {
        solutionList.push(i, index);
        return solutionList;
      }
    }
  }

  return false;
}

console.log(twoSum([2, 7, 11, 15], 9));
