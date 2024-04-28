// leet code challenge 'Remove All Occurrences of a Substring'
// problem link https://leetcode.com/problems/remove-all-occurrences-of-a-substring/description/

/**
 * @param {string} s
 * @param {string} part
 * @return {string}
 */
var removeOccurrences = function (s, part) {
  const partLength = part.length;
  let i = 0;
  while (i < s.length) {
    if (s.substring(i, i + partLength) === part) {
      s = s.substring(0, i) + s.substring(i + partLength);
      i = 0; // Reset i to 0 to start checking from the beginning
    } else {
      i++;
    }
  }
  return s;
};
