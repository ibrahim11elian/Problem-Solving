// leet code challenge 'Counter II'
// problem link https://leetcode.com/problems/counter-ii/description/

/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function (init) {
  let counter = init;
  return {
    increment: () => ++counter,
    decrement: () => --counter,
    reset: () => (counter = init),
  };
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */
