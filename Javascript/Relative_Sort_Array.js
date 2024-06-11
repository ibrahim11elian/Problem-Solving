// leet code challenge 'Relative Sort Array'
// problem link https://leetcode.com/problems/relative-sort-array/description/

/**
 * @param {number[]} arr1 - The array to be sorted
 * @param {number[]} arr2 - The array that defines the relative order
 * @return {number[]} - The sorted array
 */
var relativeSortArray = function (arr1, arr2) {
  // Create a set from arr2 for quick lookup
  let arrSet = new Set(arr2);

  // Initialize a map to count occurrences of each number in arr1
  let map = {};

  // Initialize an array to collect numbers not in arr2
  let end = [];

  // Iterate over arr1 to populate the map and end array
  arr1.forEach((n) => {
    // Count occurrences of each number in arr1
    map[n] = (map[n] || 0) + 1;

    // If the number is not in arr2, add it to the end array
    if (!arrSet.has(n)) end.push(n);
  });

  // Sort the end array in ascending order
  end.sort((a, b) => a - b);

  // Initialize the result array
  let res = [];

  // Iterate over arr2 to add numbers to the result array
  arr2.forEach((n) => res.push(...Array(map[n]).fill(n)));

  // Concatenate the sorted end array to the result array
  return res.concat(end);
};
