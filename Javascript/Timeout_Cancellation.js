// leet code challenge 'Timeout Cancellation'
// problem link https://leetcode.com/problems/timeout-cancellation/description/

/**
 * @param {Function} fn
 * @param {Array} args
 * @param {number} t
 * @return {Function}
 */
var cancellable = function (fn, args, t) {
  // Schedule the execution of the provided function with a delay
  const out = setTimeout(() => {
    return fn(...args);
  }, t);

  // Return a function that can be used to cancel the scheduled execution
  return function () {
    clearTimeout(out);
  };
};

// Example usage:

// Create an empty array to store results
const result = [];

// Define a function that multiplies its argument by 5
const fn = (x) => x * 5;

// Specify arguments for the function and delay time
const args = [2],
  t = 20,
  cancelTimeMs = 50;

// Record the starting time for measuring performance
const start = performance.now();

// Define a log function that records the time and result of the provided function
const log = (...argsArr) => {
  const diff = Math.floor(performance.now() - start);
  result.push({ time: diff, returned: fn(...argsArr) });
};

// Create a cancellable function using the log function, arguments, and delay time
const cancel = cancellable(log, args, t);

// Calculate the maximum time considering both the delay and the cancellation time
const maxT = Math.max(t, cancelTimeMs);

// Schedule the cancellation after the specified cancel time
setTimeout(cancel, cancelTimeMs);

// Schedule a callback to log the result after the maximum time (delay + cancel time) plus 15 milliseconds
setTimeout(() => {
  console.log(result); // Output: [{"time":20,"returned":10}]
}, maxT + 15);
