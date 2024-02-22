// leet code challenge 'Split Strings by Separator'
// problem link https://leetcode.com/problems/split-strings-by-separator/description/

/**
 * @param {string[]} words
 * @param {character} separator
 * @return {string[]}
 */
var splitWordsBySeparator = function (words, separator) {
  let result = [];

  words.forEach((word) => {
    let splittedWord = word.split(separator).filter((w) => w != "");
    result.push(...splittedWord);
  });

  return result;
};
