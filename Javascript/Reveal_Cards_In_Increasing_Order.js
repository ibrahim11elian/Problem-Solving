// leet code challenge 'Reveal Cards In Increasing Order'
// problem link https://leetcode.com/problems/reveal-cards-in-increasing-order/description/

/**
 * @param {number[]} deck
 * @return {number[]}
 */
var deckRevealedIncreasing = function (deck) {
  // Sort the input array in ascending order
  deck.sort((a, b) => a - b);

  // Create an empty array to store the reordered deck
  let result = [];

  // Add the last element of the sorted deck to the beginning of the result array
  result.unshift(deck[deck.length - 1]);

  // Iterate over the deck array in reverse order
  for (let i = deck.length - 2; i >= 0; i--) {
    // Remove the last element from the result array and add it to the beginning
    result.unshift(result.pop());

    // Add the current element from the deck array to the beginning of the result array
    result.unshift(deck[i]);
  }

  // Return the reordered deck
  return result;
};
