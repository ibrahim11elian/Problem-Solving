// leet code challenge 'Determine if String Halves Are Alike'
// problem link https://leetcode.com/problems/determine-if-string-halves-are-alike/description/

/**
 * Function to check if the number of vowels in the first half of a string
 * is equal to the number of vowels in the second half.
 * @param {string} s - The input string
 * @return {boolean} - True if the number of vowels in the two halves is equal, false otherwise.
 */
var halvesAreAlike = function (s) {
  // Array containing vowels in both uppercase and lowercase
  let vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

  // Convert the input string into an array of characters
  s = s.split("");

  // Pointers for iterating through the string from both ends
  let i = 0,
    j = s.length - 1;

  // Variable to count the number of vowels in each half
  let counter = 0;

  // Iterate through the string until the pointers meet in the middle
  while (i < j) {
    // Increment the count for vowels in the first half if the current character is a vowel
    if (vowels.includes(s[i])) counter++;

    // Decrement the count for vowels in the second half if the current character is a vowel
    if (vowels.includes(s[j])) counter--;

    // Move the pointers towards each other
    i++;
    j--;
  }

  // if the counter is equal to zero it means that the number of vowels in the first half...
  // equal to he number of vowels in the second half
  return counter === 0;
};

console.log(halvesAreAlike("book"));
