// leet code challenge 'Length of Last Word'
// problem link https://leetcode.com/problems/length-of-last-word/

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  // remove spaces at the beginning and last of the string
  s = s.trim();

  //   return 0 if no string or its all space
  if (!s) return 0;

  // splitting the string to array of words and get back the length of the last word
  return s.split(" ").slice(-1)[0].length;
};

console.log(lengthOfLastWord(" aa   "));
