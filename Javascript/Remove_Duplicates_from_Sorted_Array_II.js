// leet code challenge 'Remove Duplicates from Sorted Array II'
// problem link https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/description/

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let len = nums.length;
  let i = 0;

  // Iterate through the array
  while (i < len) {
    let count = 1;
    let j = i + 1;

    // Count consecutive duplicates
    while (j < len && nums[j] === nums[i]) {
      count++;

      // If more than 2 duplicates, remove the extras
      if (count > 2) {
        // remove the extra duplicates
        nums.splice(j, 1);
        // update the len
        len--;
      } else {
        j++;
      }
    }

    // Move to the next unique element
    i = j;
  }
  return len;
};

console.log(removeDuplicates([1, 1, 1, 2, 2, 3])); // should be 5
console.log(removeDuplicates([0, 0, 1, 1, 1, 1, 2, 3, 3])); // should be 7
console.log(removeDuplicates([0, 1, 2, 2, 2, 2, 2, 3, 4, 4, 4])); // should be 7
