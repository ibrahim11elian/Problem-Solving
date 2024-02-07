// leet code challenge 'Sort Characters By Frequency'
// problem link https://leetcode.com/problems/sort-characters-by-frequency/description/

/**
 * Function to sort characters in a string based on their frequency.
 * @param {string} s
 * @return {string}
 */
var frequencySort = function (s) {
  // Create a map to store character counts.
  const counterMap = new Map();

  // Count occurrences of each character in the input string.
  for (const char of s) {
    counterMap.set(char, (counterMap.get(char) || 0) + 1);
  }

  // Convert the map entries to an array of [character, frequency] pairs.
  const charFreq = Array.from(counterMap.entries());

  // Sort the array based on frequency in descending order.
  charFreq.sort((a, b) => b[1] - a[1]);

  // Construct the result string by appending characters based on their frequency.
  let result = "";
  for (const [char, freq] of charFreq) {
    result += char.repeat(freq);
  }

  return result;
};
