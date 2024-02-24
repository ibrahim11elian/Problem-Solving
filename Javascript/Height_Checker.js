// leet code challenge 'Height Checker'
// problem link https://leetcode.com/problems/height-checker/description/

/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function (heights) {
  // create a copy from the heights array to sort it.
  let expected = [...heights];

  //  1. sort the array in ascending order
  expected.sort((a, b) => a - b);

  //  2. count the number of swaps needed to make the array sorted
  let counter = 0;
  expected.forEach((e, i) => {
    if (e !== heights[i]) counter += 1;
  });

  return counter;
};

console.log(heightChecker([1, 1, 4, 2, 1, 3]));
