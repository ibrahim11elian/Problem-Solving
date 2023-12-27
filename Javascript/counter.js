// leet code challenge 'Counter'
// problem link https://leetcode.com/problems/counter/description/

/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function (n) {
  let counter = n;
  return function () {
    return counter++;
  };
};

/**
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */
