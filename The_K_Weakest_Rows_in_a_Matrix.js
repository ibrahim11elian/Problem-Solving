
// leet code challenge 'Roman to Integer'
// problem link https://leetcode.com/problems/the-k-weakest-rows-in-a-matrix/

/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
var kWeakestRows = function (mat, k) {
    let lineInCount = [];
    let output = [];
    let len = mat.length;
    for (let i = 0; i < len; i++) {
        let counter = countSoldiers(mat[i]);
        if (!isNaN(counter)) {
            lineInCount.push(counter);
        } else {
            return counter;
        }
    }
    let copy = [...lineInCount];
    copy = copy.sort(function (a, b) { return a - b; });
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
            if (copy[i] === lineInCount[j]) {
                if (output.includes(j)) {
                    continue;
                } else {
                    output.push(j);
                    break;
                }
            }
        }
    }
    return k >= 1 && k <= len ? output.slice(0, k) : `you have to choose number between 1 and ${len}`;
};


// for counting soldiers and making sure that all elements are binary elements
let countSoldiers = (line) => {
    let counter = 0;
    for (const ele of line) {
        if (ele === 1) {
            counter += 1;
        } else if (ele === 0);
        else {
            return `matrix can have only 0 or 1`;
        }
    }
    return counter;
};


let arr = [
    [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
    [1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
    [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]];


console.log(kWeakestRows(arr, 1));