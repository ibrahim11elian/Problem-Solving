// leet code challenge 'Longest Substring Without Repeating Characters'
// problem link https://leetcode.com/problems/longest-substring-without-repeating-characters/

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let supString = s[0];
  let max = 0;
  let len = s.length;

  if (len === 0) {
    return 0;
  } else if (len === 2 && s[0] !== s[1]) {
    return len;
  }
  for (let i = 1; i < len; i++) {
    if (supString.includes(s[i])) {
      max = max < supString.length ? supString.length : max;
      let j = i - 1;
      while (s[j] !== s[i]) {
        j--;
      }
      i = j;
      supString = "";
      continue;
    } else {
      supString += s[i];
    }
  }
  return max < supString.length ? supString.length : max;
};

console.log(lengthOfLongestSubstring("pwwkew"));
