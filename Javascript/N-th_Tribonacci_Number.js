// leet code challenge 'N-th Tribonacci Number'
// problem link https://leetcode.com/problems/n-th-tribonacci-number/description/

/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function (n) {
  let arr = Array(38);
  arr[0] = 0;
  arr[1] = 1;
  arr[2] = 1;
  if (n <= 2) return arr[n];
  let i = 3;
  while (i <= n) {
    arr[i] = arr[i - 1] + arr[i - 2] + arr[i - 3];
    i++;
  }
  return arr[n];
};
