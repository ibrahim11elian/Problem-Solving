
// leet code challenge 'Fizz Buzz'
// problem link https://leetcode.com/problems/fizz-buzz/

/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function (n) {
    let arr = [];

    for (let i = 0; i < n; i++) {
        if ((i + 1) % 3 === 0 && (i + 1) % 5 === 0) {
            arr[i] = 'FizzBuzz';
        } else if ((i + 1) % 3 === 0) {
            arr[i] = 'Fizz';
        } else if ((i + 1) % 5 === 0) {
            arr[i] = 'Buzz';
        } else {
            arr[i] = `${i + 1}`;
        }

    }
    return arr;
};

console.log(fizzBuzz(15));
