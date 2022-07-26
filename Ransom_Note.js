// leet code challenge 'Ransom Note'
// problem link https://leetcode.com/problems/ransom-note/

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {

    let rans = ransomNote.split('');
    let maga = magazine.split('');
    let alreadyHave = {};

    for (let i = 0, j = 0; i < maga.length; i++) {
        if (maga[i] === rans[j]) {
            if (i in alreadyHave) continue;
            alreadyHave[i] = maga[i];
            j++;
            i = -1;
            if (j === rans.length) {
                return true;
            }
        }
    }
    return false;

};

console.log(canConstruct("abc", "ahbgdc"));