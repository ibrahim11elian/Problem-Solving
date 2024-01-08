// leet code challenge 'Join Two Arrays by ID'
// problem link https://leetcode.com/problems/join-two-arrays-by-id/description/

/**
 * @param {Array} arr1 - The first array to be joined.
 * @param {Array} arr2 - The second array to be joined.
 * @return {Array} - The joined array.
 */
var join = function (arr1, arr2) {
  // Create an empty object to store the result with unique identifiers as keys.
  const result = {};

  // Iterate over the elements in the first array (arr1).
  for (let i = 0; i < arr1.length; i++) {
    // Use the 'id' property of each element in arr1 as the key in the result object.
    result[arr1[i].id] = arr1[i];
  }

  // Iterate over the elements in the second array (arr2).
  for (let i = 0; i < arr2.length; i++) {
    // Check if the 'id' of the current element in arr2 already exists in the result object.
    if (result[arr2[i].id]) {
      // If the 'id' exists, merge properties of the current element in arr2 with the existing element in result.
      for (const key in arr2[i]) {
        result[arr2[i].id][key] = arr2[i][key];
      }
    } else {
      // If the 'id' does not exist, add the entire element from arr2 to the result object.
      result[arr2[i].id] = arr2[i];
    }
  }

  // Convert the values of the result object (merged elements) into an array and return it.
  return Object.values(result);
};
