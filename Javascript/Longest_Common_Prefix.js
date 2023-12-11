// leet code problem 'Longest Common Prefix'
// problem link https://leetcode.com/problems/longest-common-prefix/description/

var longestCommonPrefix = function (strs) {
  // Initialize the prefix with the first string in the array
  let prefix = strs[0];

  // Iterate through the remaining strings in the array
  for (let i = 1, len = strs.length; i < len; i++) {
    // While the current string does not start with the current prefix
    while (strs[i].indexOf(prefix) !== 0) {
      // Reduce the length of the prefix by removing the last character
      prefix = prefix.slice(0, -1);

      // If the prefix becomes an empty string, there is no common prefix
      if (prefix === "") {
        return "";
      }
    }
  }

  // Return the longest common prefix found
  return prefix;
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
