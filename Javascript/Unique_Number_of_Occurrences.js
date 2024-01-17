// leet code challenge 'Unique Number of Occurrences'
// problem link https://leetcode.com/problems/unique-number-of-occurrences/description/

/**
 * This function checks whether the number of occurrences of elements in the input array is unique.
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function (arr) {
  // Create an object to store the count of occurrences for each element in the array.
  let obj = {};

  // Iterate through the array and update the count of occurrences in the object.
  arr.forEach((ele) => {
    if (ele in obj) {
      // If the element is already in the object, increment its count.
      obj[ele] += 1;
    } else {
      // If the element is not in the object, initialize its count to 1.
      obj[ele] = 1;
    }
  });

  // Extract an array of occurrence counts from the object.
  let counters = Object.values(obj);

  // Create a Set from the array of occurrence counts to remove duplicates.
  let CountersSet = new Set([...counters]);

  // Check if the length of the array of occurrence counts is equal to the size of the Set.
  // If true, it means that all counts are unique, and the function returns true.
  // If false, it means that there are duplicates, and the function returns false.
  return counters.length === CountersSet.size;
};
