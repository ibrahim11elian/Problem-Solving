// leet code challenge 'Least Number of Unique Integers after K Removals'
// problem link https://leetcode.com/problems/least-number-of-unique-integers-after-k-removals/description/

/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findLeastNumOfUniqueInts = function (arr, k) {
  // Initialize an empty object to store the frequency of each element in the array
  let hash = {};

  // Iterate through the input array to populate the frequency hash
  arr.forEach((e) => {
    if (e in hash)
      hash[
        e
      ] += 1; // If the element already exists in the hash, increment its frequency
    else hash[e] = 1; // Otherwise, set its frequency to 1
  });

  // Extract the frequency values from the hash and sort them in ascending order
  let freq = Object.values(hash);
  freq.sort((a, b) => a - b);

  // Initialize the result variable to the number of unique integers initially
  let result = freq.length;

  // Initialize a counter variable
  let i = 0;

  // Iterate through the frequencies while there are still elements to remove (k > 0)
  // and there are still frequencies to consider (i < freq.length)
  while (k > 0 && i < freq.length) {
    let f = freq[i]; // Get the frequency of the current element

    // If the number of elements to remove (k) is greater than or equal to
    // the frequency of the current element, remove all occurrences of this element
    // and decrement the result (number of unique integers) by 1
    if (k >= f) {
      k -= f; // Decrement k by the frequency of the current element
      result -= 1; // Decrement the result by 1
    }

    i++; // Move to the next frequency
    // If the frequency of the current number is larger than the frequency of the next one,
    // we can skip it because it will not make a difference to the final result
  }

  // Return the final result (least number of unique integers left after removing k elements)
  return result;
};

console.log(findLeastNumOfUniqueInts([5, 5, 4]));
