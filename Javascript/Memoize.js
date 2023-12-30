// leet code challenge 'Memoize'
// problem link https://leetcode.com/problems/memoize/description/

/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
  const cach = new Map();
  return function (...args) {
    let str = JSON.stringify(args);
    if (cach.has(str)) return cach.get(str);
    let output = fn(...args);
    cach.set(str, output);
    return output;
  };
}

/**
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1
 */
