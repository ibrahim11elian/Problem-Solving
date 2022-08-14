
// leet code challenge 'Best Time to Buy and Sell Stock'
// problem link https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

/**
 * @param {number[]} prices
 * @return {number}
 */
// accepted solution -not my-
var maxProfit = function (prices) {
    let profit = 0;

    let stockToBuy = prices[0];

    for (let i = 1; i < prices.length; i++) {
        if (stockToBuy > prices[i]) {
            stockToBuy = prices[i];
        }

        const currentProfit = prices[i] - stockToBuy;

        if (currentProfit > profit) {
            profit = currentProfit;
        }
    }

    return profit;
};


// second solution my solution

// var maxProfit = function (prices) {
//     const len = prices.length;
//     let largeSell;
//     let best = 0;
//     for (let i = 0; i < len; i++) {
//         largeSell = Math.max(...prices.slice(i));
//         if (prices[i] < largeSell) {
//             let profit = largeSell - prices[i];
//             best = Math.max(best, profit);
//         }
//     }
//     return best;
// };


// third solution my sol

// var maxProfit = function (prices) {
//     const len = prices.length;
//     let largeSell;
//     let best = [];
//     for (let i = 0; i < len; i++) {
//         largeSell = Math.max(...prices.slice(i));
//         best.push(largeSell - prices[i]);
//     }
//     return Math.max(...best);
// };