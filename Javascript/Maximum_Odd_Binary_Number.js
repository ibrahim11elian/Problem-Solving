// leet code challenge 'Maximum Odd Binary Number'
// problem link https://leetcode.com/problems/maximum-odd-binary-number/description/

var maximumOddBinaryNumber = function (s) {
  let ones = 0;
  for (const c of s) {
    if (c === "1") ones++;
  }
  if (ones === 0) return "1"; // If input consists of all zeros
  return "1".repeat(ones - 1) + "0".repeat(s.length - ones) + "1";
};
