// leet code challenge 'Function Composition'
// problem link https://leetcode.com/problems/function-composition/

/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function (functions) {
  // Return function that takes an input value (x)
  return function (x) {
    // If the array of functions is empty, return the input value as is
    if (functions.length === 0) return x;

    // Reverse the array of functions and apply each function to the input value
    functions.reverse().forEach((fn) => {
      x = fn(x);
    });

    // Return the final result after applying all functions
    return x;
  };
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */
