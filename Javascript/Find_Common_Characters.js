// leet code challenge 'Find Common Characters'
// problem link https://leetcode.com/problems/find-common-characters/description/

/**
 * @param {string[]} words
 * @return {string[]}
 */
var commonChars = function (words) {
  let map = {};
  for (let i = 0; i < words[0].length; i++) {
    map[words[0][i]] = (map[words[0][i]] || 0) + 1;
  }

  for (let i = 1; i < words.length; i++) {
    let tmpMap = {};
    for (let j = 0; j < words[i].length; j++) {
      tempMap = tmpMap[words[i][j]] = (tmpMap[words[i][j]] || 0) + 1;
    }
    for ([k, v] of Object.entries(map)) {
      map[k] = Math.min(v, tmpMap[k]);
    }
  }
  let res = [];
  for ([k, v] of Object.entries(map)) {
    for (let i = 0; i < v; i++) res.push(k);
  }

  return res;
};
