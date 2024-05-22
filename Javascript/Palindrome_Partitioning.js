// leet code challenge 'Palindrome Partitioning'
// problem link https://leetcode.com/problems/palindrome-partitioning/description/

/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
  // Split the string into an array of characters for easier manipulation
  s = s.split("");

  let res = []; // This will store the final list of palindromic partitions
  let subset = []; // This is a temporary array to store the current partition

  // Define a helper function to perform backtracking
  const helper = (i) => {
    // Base case: if the index 'i' reaches the end of the string, push the current subset to the result
    if (i >= s.length) {
      res.push([...subset]); // Make a copy of subset and add it to the result
      return;
    }

    // Iterate over the string starting from index 'i' to the end
    for (let j = i; j < s.length; j++) {
      // Create a substring from index 'i' to 'j' inclusive
      let str = s.slice(i, j + 1).join("");
      // Create the reverse of the substring
      let reverseStr = s
        .slice(i, j + 1)
        .reverse()
        .join("");

      // Check if the substring is a palindrome
      if (str === reverseStr) {
        subset.push(str); // If it is, add it to the current partition
        helper(j + 1); // Recur with the next starting index after the palindrome
        subset.pop(); // Backtrack: remove the last added palindrome
      }
    }
  };

  // Start the backtracking process from index 0
  helper(0);

  // Return the list of all palindromic partitions
  return res;
};
