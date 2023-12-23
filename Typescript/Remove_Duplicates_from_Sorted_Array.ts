// leet code challenge 'Remove Duplicates from Sorted Array'
// problem link https://leetcode.com/problems/remove-duplicates-from-sorted-array/

// bad problem
// give dislike 👎

function removeDuplicates(nums: number[]): number[] {
  const len = nums.length;
  let arr: number[] = [];
  let hash: { [key: number]: number } = {};
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

// another solution
function removeDuplicates2(nums: number[]): number[] {
  const set: Set<number> = new Set(nums);
  nums = [...set.values()];
  return nums;
}

console.log(removeDuplicates2([0, 0, 1, 2, 2, 3]));
