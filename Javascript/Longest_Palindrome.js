
// leet code challenge 'Longest Palindrome'
// problem link https://leetcode.com/problems/longest-palindrome/

/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
    let arr = s.split("");
    let hash = {};
    arr.forEach((ele) => {
        if (ele in hash) {
            hash[ele] += 1;
        } else {
            hash[ele] = 1;
        }
    });
    let longest = 0;
    let flag = false;
    if (Object.keys(hash).length === 1) {
        return Object.values(hash)[0];
    } else {
        Object.entries(hash).forEach((e) => {
            if (e[1] % 2 === 0) {
                longest += e[1];
            } else {
                longest += e[1] - 1;
                flag = true;
            }
        });
        if (flag === true) {
            longest += 1;
        }
        return longest;
    }

};
console.log(longestPalindrome("bananas"));

// console.log(longestPalindrome("HYTBCABADEFGHABCDEDCBAGHTFYW12345678987654321ZWETYGDE")); 