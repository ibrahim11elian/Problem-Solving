// leet code challenge 'Most Frequent Even Element'
// problem link https://leetcode.com/problems/most-frequent-even-element/description/

/**
 * @param {number[]} nums
 * @return {number}
 */
var mostFrequentEven = function (nums) {
  let hash = {};
  let result = -1;
  counter = 0;
  nums.forEach((e) => {
    if (e % 2 === 0) {
      if (e in hash) {
        hash[e] += 1;
      } else hash[e] = 1;

      // Update smallest with greatest frequency
      if (hash[e] > counter || (hash[e] === counter && e < result)) {
        result = e;
        counter = hash[e];
      }
    }
  });

  return result;
};
