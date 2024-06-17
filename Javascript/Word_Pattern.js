// leet code challenge 'Word Pattern'
// problem link https://leetcode.com/problems/word-pattern/description/

/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
  let mapP = new Map();
  let mapS = new Map();

  let arr = s.split(" ");
  if (arr.length !== pattern.length) return false;

  for (let i = 0; i < pattern.length; i++) {
    if (mapP.has(pattern[i])) {
      if (mapP.get(pattern[i]) !== arr[i]) return false;
    } else {
      mapP.set(pattern[i], arr[i]);
    }

    if (mapS.has(arr[i])) {
      if (mapS.get(arr[i]) !== pattern[i]) return false;
    } else {
      mapS.set(arr[i], pattern[i]);
    }
  }

  return true;
};
