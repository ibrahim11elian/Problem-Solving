
// leet code challenge 'Find Pivot Index' and 'Find the Middle Index in Array'
// problem link https://leetcode.com/problems/find-pivot-index/ & https://leetcode.com/problems/find-the-middle-index-in-array/

/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
    let len = nums.length;
    let sum = nums.reduce((acc, cur) => acc + cur, 0);
    let sumOfLeft = 0;
    for (let i = 0; i < len; i++) {
        if (sumOfLeft === sum - sumOfLeft - nums[i]) {
            return i;
        }
        sumOfLeft += nums[i];
    }
    return -1;
};

console.log(pivotIndex([-1, -1, -1, -1, -1, 0]));