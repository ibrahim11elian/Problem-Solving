// leet code challenge 'Maximize Happiness of Selected Children'
// problem link https://leetcode.com/problems/Maximize-Happiness-of-Selected-Children/description/

/**
 * @param {number[]} happiness
 * @param {number} k
 * @return {number}
 */
var maximumHappinessSum = function (happiness, k) {
  // Sort the happiness array in descending order
  happiness.sort((a, b) => b - a);
  let res = 0;
  // Iterate over the first k elements of the sorted array
  for (let i = 0; i < k; i++) {
    // Calculate the difference between happiness value and its index
    let def = happiness[i] - i;
    // If the difference is less than or equal to 0, return the current result
    if (def <= 0) return res;
    // Otherwise, add the difference to the result
    res += def;
  }
  // Return the final result
  return res;
};
