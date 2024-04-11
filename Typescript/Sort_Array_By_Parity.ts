// leet code challenge 'Sort Array By Parity'
// problem link https://leetcode.com/problems/sort-array-by-parity/description/

function sortArrayByParity(nums: number[]): number[] {
  let result: number[] = [];
  nums.forEach((n) => {
    if (n % 2 === 0) result.unshift(n);
    else result.push(n);
  });
  return result;
}
