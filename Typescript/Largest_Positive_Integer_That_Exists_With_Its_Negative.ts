// leet code challenge 'Largest Positive Integer That Exists With Its Negative'
// problem link https://leetcode.com/problems/largest-positive-integer-that-exists-with-its-negative/description/

function findMaxK(nums: number[]): number {
  const map = new Map();
  let res: number = -1;
  for (let i = 0; i < nums.length; i++) {
    const num = Math.abs(nums[i]);
    if (map.has(num)) {
      if (nums[i] < 0 && map.get(num)) {
        res = Math.max(res, num);
      } else if (nums[i] >= 0 && !map.get(num)) {
        res = Math.max(res, num);
      }
    } else {
      map.set(num, nums[i] > 0);
    }
  }
  return res;
}
