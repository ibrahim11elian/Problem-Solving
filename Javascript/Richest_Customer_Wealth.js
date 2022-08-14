
// leet code challenge 'Richest Customer Wealth'
// problem link https://leetcode.com/problems/richest-customer-wealth/

/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function (accounts) {

    let wealthArr = [];
    let output = 0;
    let cur = 0;
    accounts.forEach(ele => {
        cur = ele.reduce((acc, cur) => acc + cur);
        if (cur > output) output = cur;
    });

    return output;
};

console.log(maximumWealth([[2, 8, 7], [7, 1, 3], [1, 9, 5]]));