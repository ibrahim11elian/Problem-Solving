// leet code challenge 'Reverse Integer'
// problem link https://leetcode.com/problems/reverse-integer/

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  if (x.toString().startsWith("-")) {
    x = Number(`-${x.toString().slice(1).split("").reverse().join("")}`);
  } else {
    x = Number(x.toString().split("").reverse().join(""));
  }
  if (valid(x)) return x;
  return 0;
};

let valid = (number) => {
  if (number >= -Math.pow(2, 31) - 1 && number <= Math.pow(2, 31)) return true;
  return false;
};

console.log(reverse(1534236469));
