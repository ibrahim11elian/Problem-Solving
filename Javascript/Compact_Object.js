// leet code challenge 'Compact Object'
// problem link https://leetcode.com/problems/compact-object/description/

/**
 * Compacts an object or array by recursively removing falsy values.
 * @param {Object|Array} obj
 * @return {Object|Array}
 * @example
 */
var compactObject = function (obj) {
  // Check if the provided value is an array
  if (Array.isArray(obj)) {
    let result = [];
    // Iterate through the elements of the array
    for (const i in obj) {
      const value = obj[i];
      // If the element is iterable, recursively compact it
      if (isIterable(value)) result.push(compactObject(value));
      // If the element is truthy, include it in the result
      else if (Boolean(value)) result.push(value);
    }
    return result;
  } else {
    // If the provided value is an object
    let result = {};
    // Iterate through the keys of the object
    for (const key in obj) {
      const value = obj[key];
      // If the value associated with the key is iterable, recursively compact it
      if (isIterable(value)) result[key] = compactObject(value);
      // If the value is truthy, include it in the result
      else if (Boolean(value)) result[key] = value;
    }
    return result;
  }
};

// Example usage:
console.log(compactObject([null, 0, 5, [0], [false, 16]]));

/**
 * Checks if a value is iterable.
 * @param {*} obj - The value to check.
 * @return {boolean} - True if the value is iterable, false otherwise.
 */
function isIterable(obj) {
  // Returns true if the value is an object (excluding null) or an array
  return (typeof obj === "object" && obj !== null) || Array.isArray(obj);
}
