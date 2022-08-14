
// leet code challenge 'Fibonacci Number'
// problem link https://leetcode.com/problems/fibonacci-number/

/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
    if (n === 0) {
        return 0;
    } else if (n === 1) {
        return 1;
    } else {
        return fib(n - 1) + fib(n - 2);
    }
};