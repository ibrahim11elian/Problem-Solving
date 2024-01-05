// leet code challenge 'Debounce'
// problem link https://leetcode.com/problems/debounce/description/

// Debouncing is a method that limits the rate at which a function gets called. It works by delaying the execution of a function until a certain amount of time has passed without any additional function calls. If another function call happens within this time frame, the timer resets and the function execution is delayed again.

// Debouncing is useful in situations where you want to prevent a function from being called too frequently, such as:

// Handling user input events like keypress, mouse movements, or button clicks.

// Handling expensive computations or network requests that don't need to be performed on every function call.

/**
 * @param {Function} fn
 * @param {number} t milliseconds
 * @return {Function}
 */
var debounce = function (fn, t) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), t);
  };
};

/**
 * const log = debounce(console.log, 100);
 * log('Hello'); // cancelled
 * log('Hello'); // cancelled
 * log('Hello'); // Logged at t=100ms
 */
