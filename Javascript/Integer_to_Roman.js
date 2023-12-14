// leet code challenge 'Integer to Roman'
// problem link https://leetcode.com/problems/integer-to-roman/description/

/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
  // Define a mapping of Roman numeral symbols and their corresponding values
  let romanSymbols = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };

  // Initialize an empty string to store the resulting Roman numeral
  let result = "";

  // Iterate through the Roman numeral symbols
  for (const char in romanSymbols) {
    // Determine how many times the current symbol can be subtracted from the number
    const n = Math.floor(num / romanSymbols[char]);

    // Append the Roman numeral symbol to the result string
    result += char.repeat(n);

    // Update the number by subtracting the value of the Roman numeral symbol multiplied by its count
    num -= n * romanSymbols[char];
  }

  // Return the final Roman numeral representation
  return result;
};

console.log(intToRoman(1994));
