
// leet code challenge 'Two Sum'
// problem link https://leetcode.com/problems/two-sum/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    if (nums.length >= 2 && nums.length <= Math.pow(10, 4) && target >= Math.pow(-10, 9) && target <= Math.pow(10, 9)) {
        let hash = {};
        let solution = false;
        let solutionList = [];
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] >= Math.pow(-10, 9) && nums[i] <= Math.pow(10, 9)) {
                hash[nums[i]] = i;
            } else {
                return `Invalid array number value!`;
            }
        }
        for (let i = 0; i < nums.length; i++) {
            let remaining = target - nums[i];
            if (remaining in hash) {
                if (hash[remaining] !== i) {
                    solution = true;
                    solutionList.push(i);
                    solutionList.push(hash[remaining]);
                    return solutionList;
                }
            }
        }
        if (solution !== true) {
            return `Not Found`;
        }
    } else {
        return `Invalid array length!`;
    }
};

console.log(twoSum([2, 7, 11, 15], 9));