/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
  return +s.trimStart(" ");
};

console.log(myAtoi(" a       233"));
