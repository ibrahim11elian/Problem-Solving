// leet code challenge 'Daily Temperatures'
// problem link https://leetcode.com/problems/daily-temperatures/description/

/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
  // Initialize an array to store the result (number of days to wait for a warmer temperature)
  const result = new Array(temperatures.length).fill(0);
  // Initialize a stack to keep track of indices of temperatures waiting for a warmer temperature
  const stack = [];

  // Iterate through the temperatures array
  for (let i = 0, len = temperatures.length; i < len; i++) {
    // While the stack is not empty and the current temperature is greater than the temperature
    // at the index at the top of the stack
    while (
      stack.length &&
      temperatures[i] > temperatures[stack[stack.length - 1]]
    ) {
      // Pop the index at the top of the stack
      const idx = stack.pop();
      // Update the result array with the number of days to wait for a warmer temperature
      result[idx] = i - idx;
    }
    // Push the current index onto the stack
    stack.push(i);
  }

  // Return the result array
  return result;
};

console.log(dailyTemperatures([30, 60, 90]));
