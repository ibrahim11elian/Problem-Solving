// leet code challenge 'Group By'
// problem link https://leetcode.com/problems/group-by/description/

/**
 * Extends the functionality of the Array prototype by adding a 'groupBy' method.
 * This method groups array elements based on the result of applying the given function.
 *
 * @param {Function} fn
 * @return {Object}
 */
Array.prototype.groupBy = function (fn) {
  // Create an empty object to store the grouped elements.
  const output = {};

  // Iterate over each element in the array.
  this.forEach((e) => {
    // Determine the grouping key by applying the provided function.
    const key = fn(e);

    // If the key does not exist in the output object, create an empty array for that key.
    if (!output[key]) {
      output[key] = [];
    }

    // Push the current element into the array associated with its grouping key.
    output[key].push(e);
  });

  return output;
};

/**
 *
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */
