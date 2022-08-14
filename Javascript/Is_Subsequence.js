
// leet code challenge 'Is Subsequence'
// problem link https://leetcode.com/problems/is-subsequence/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {

};

var isSubsequence = function (s, t) {

    // s is string i searching for
    // t is the big string i search in
    let len = t.length;
    let alreadyHave = {};
    if (s === '') return true;
    for (let i = 0, j = 0; i < len; i++) {
        if (t[i] === s[j]) {
            if (alreadyHave[i]) continue;
            alreadyHave[i] = s[i];
            j++;
            if (j === s.length) {
                return true;
            }
        }
    }
    return false;

};

console.log(isSubsequence("acb", "ahbgdc"));