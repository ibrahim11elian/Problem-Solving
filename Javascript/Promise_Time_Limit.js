// leet code challenge 'Promise Time Limit'
// problem link https://leetcode.com/problems/promise-time-limit/

/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
var timeLimit = function (fn, t) {
  return async function (...args) {
    // Execute the original function with the provided arguments.
    const output = fn(...args);

    // Create a Promise that rejects after the specified time limit.
    const reject = new Promise((resolve, reject) => {
      setTimeout(() => reject("Time Limit Exceeded"), t);
    });

    // Use Promise.race to return the first settled promise among output and reject.
    // If output resolves within the time limit, it will be the result.
    // If reject rejects due to the time limit, it will be the result.
    return Promise.race([output, reject]);
  };
};

/**
 * const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
 * limited(150).catch(console.log) // "Time Limit Exceeded" at t=100ms
 */
