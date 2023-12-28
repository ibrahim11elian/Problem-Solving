// leet code challenge 'String Compression'
// problem link https://leetcode.com/problems/string-compression/description/

/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function (chars) {
  if (chars.length === 1) return 1;

  let left = 1,
    i = 0,
    len = chars.length;

  while (left <= len) {
    if (left === len || chars[left] !== chars[i]) {
      if (left - i > 1) {
        const countStr = (left - i).toString();
        chars.splice(i + 1, left - i - 1, ...countStr.split(""));
        left = i + countStr.length + 1; // Move left to the position after the count
        len = chars.length; // Update the length after splicing
      }
      i = left++;
    } else {
      left++;
    }
  }

  return chars.length;
};

console.log(
  compress(["a", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b"])
);
