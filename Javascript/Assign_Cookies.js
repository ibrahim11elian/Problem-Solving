// leet code challenge 'Assign Cookies'
// problem link https://leetcode.com/problems/assign-cookies/description/

/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (g, s) {
  g.sort((a, b) => a - b);
  s.sort((a, b) => a - b);

  let i = 0,
    j = 0,
    count = 0;
  while (j < s.length && i < g.length) {
    if (g[i] <= s[j]) {
      count += 1;
      i++;
    }
    j++;
  }

  return count;
};
