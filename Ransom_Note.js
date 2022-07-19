// leet code challenge 'Roman to Integer'
// problem link https://leetcode.com/problems/ransom-note/

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {

    let rans = ransomNote.split('');
    let maga = magazine.split('');

    for (let i = 0, j = 0; i < maga.length; i++) {
        if (maga[i] === rans[j]) {
            j++;
            if (j === rans.length) {
                return true;
            }
        } else {
            j = 0;
        }
    }
    return false;

};

console.log(canConstruct("12", "521723"));