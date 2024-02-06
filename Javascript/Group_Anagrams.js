// leet code challenge 'Group Anagrams'
// problem link https://leetcode.com/problems/group-anagrams/description/

/**
 * Function to group anagrams from an array of strings.
 * @param {string[]} strs
 * @return {string[][]} - 2D array where each subarray contains anagrams grouped together.
 */
var groupAnagrams = function (strs) {
  // Create an empty object to store grouped anagrams
  let hash = {};

  // Iterate through each string in the input array
  strs.forEach((str) => {
    // Sort the characters of the current string alphabetically and join them back to form a sorted string
    let s = str.split("").sort().join("");

    // If the sorted string already exists as a key in the hash object, push the current string to its corresponding array
    if (s in hash) {
      hash[s].push(str);
    }
    // If the sorted string is not already a key in the hash object, create a new key with the sorted string and initialize its value as an array containing the current string
    else {
      hash[s] = [str];
    }
  });

  // Return an array containing the values (arrays of anagrams) of the hash object
  return Object.values(hash);
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])); // output: [ [ 'eat', 'tea', 'ate' ], [ 'tan', 'nat' ], [ 'bat' ] ]
