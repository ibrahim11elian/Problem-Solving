
// leet code challenge 'Running Sum of 1d Array'
// problem link https://leetcode.com/problems/running-sum-of-1d-array/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
    nums.forEach((ele, index) => {
        if (index !== 0) {
            nums[index] += nums[index - 1];
        }
    });
    return nums;
};

console.log(runningSum([3, 1, 2, 10, 1]));