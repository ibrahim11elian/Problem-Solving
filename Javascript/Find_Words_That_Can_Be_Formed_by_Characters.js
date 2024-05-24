// leet code challenge 'Find Words That Can Be Formed by Characters'
// problem link https://leetcode.com/problems/Find-Words-That-Can-Be-Formed-by-Characters/description/

/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function (words, chars) {
  let map = new Map();
  for (let i = 0; i < chars.length; i++) {
    map.set(chars[i], (map.get(chars[i]) || 0) + 1);
  }

  let newMap;

  let result = 0;
  for (let i = 0; i < words.length; i++) {
    newMap = new Map(map);
    let count = 0;
    for (let j = 0; j < words[i].length; j++) {
      if (newMap.has(words[i][j]) && newMap.get(words[i][j]) > 0) {
        newMap.set(words[i][j], newMap.get(words[i][j]) - 1);
        count++;
      } else {
        break;
      }
    }
    if (count === words[i].length) result += count;
  }

  return result;
};
