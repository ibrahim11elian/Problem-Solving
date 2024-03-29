// leet code challenge 'Make The String Great'
// problem link https://leetcode.com/problems/make-the-string-great/description/

const makeGood = (s: string): string => {
  let i = 0; // Initialize index variable for looping through the string
  while (true) {
    // Check if the index is at the end of the string or if the string is empty, return the string
    if (i === s.length - 1 || !s) return s;

    // Check if the current character and the next character are the same letter but different cases
    if (
      s[i].toLowerCase() === s[i + 1].toLowerCase() && // Check if the characters are the same letter
      Math.abs(s.charCodeAt(i) - s.charCodeAt(i + 1)) === 32 // Check if the characters have a ASCII difference of 32 (indicating different cases)
    ) {
      // Remove the adjacent characters if conditions are met
      s = s.slice(0, i) + s.slice(i + 2); // Remove the characters at index i and i+1
      i = 0; // Reset the index to start checking from the beginning of the string
    } else {
      i++; // Move to the next character if conditions are not met
    }
  }
  return s; // Return the modified string
};
