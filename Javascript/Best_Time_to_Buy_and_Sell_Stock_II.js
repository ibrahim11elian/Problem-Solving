// leet code challenge 'Best Time to Buy and Sell Stock II'
// problem link https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/

/**
 * @param {number[]} prices
 * @return {number}
 */

var maxProfit = function (prices) {
  // Initialize profit to 0
  let profit = 0;

  // Iterate through the prices
  for (let i = 0; i < prices.length - 1; i++) {
    // Check if the current price is less than the next day's price
    if (prices[i] < prices[i + 1]) {
      // If true, calculate the profit from buying and selling on these two days
      // Add the profit to the total profit
      profit += prices[i + 1] - prices[i];
    }
  }

  // Return the total profit
  return profit;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
