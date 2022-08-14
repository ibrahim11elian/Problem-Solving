
// leet code challenge 'Isomorphic Strings'
// problem link https://leetcode.com/problems/isomorphic-strings/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
    let hash = {};
    let len = s.length;
    for (let i = 0; i < len; i++) {
        if (hash[s[i]]) {
            if (t[i] !== hash[s[i]]) {
                return false;
            }
        } else if (Object.values(hash).includes(t[i])) {
            return false;
        } else {
            hash[s[i]] = t[i];
        }
    }

    return true;
};


console.log(isIsomorphic('paper', 'tile'));