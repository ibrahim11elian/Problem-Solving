// leet code challenge 'Remove Duplicates from Sorted Array'
// problem link https://leetcode.com/problems/remove-duplicates-from-sorted-array/

// bad problem
// give dislike 👎

https: function removeDuplicates(nums: number[]): number[] {
  const len = nums.length;
  let arr: number[] = [];
  let hash: object = {};
  for (let i = 0; i < len; i++) {
    if (nums[i] in hash) continue;
    else {
      hash[nums[i]] = i;
      arr.push(nums[i]);
    }
  }
  nums = [...arr];
  return nums;
}

console.log(removeDuplicates([0, 0, 1, 2, 2, 3]));
