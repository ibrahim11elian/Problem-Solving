
// leet code challenge 'Roman to Integer'
// problem link https://leetcode.com/problems/roman-to-integer/

/**
 * @param {string} s
 * @return {number}
 */

let dectionary = {
    "I": 1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000
};

var romanToInt = function (s) {
    if (s.length >= 1 && s.length <= 15) {
        s = s.toUpperCase();
        let input = s.split("");
        let sum = 0;
        for (let i = 0; i < input.length; i++) {
            if (Object.keys(dectionary).includes(input[i])) {
                if (input[i] === 'I') {
                    if (input[i + 1] === 'V' || input[i + 1] === 'X') {
                        sum -= dectionary[input[i]];
                    } else {
                        sum += dectionary[input[i]];
                    }
                } else if (input[i] === 'X') {
                    if (input[i + 1] === 'L' || input[i + 1] === 'C') {
                        sum -= dectionary[input[i]];
                    } else {
                        sum += dectionary[input[i]];
                    }
                } else if (input[i] === 'C') {
                    if (input[i + 1] === 'D' || input[i + 1] === 'M') {
                        sum -= dectionary[input[i]];
                    } else {
                        sum += dectionary[input[i]];
                    }
                } else {
                    sum += dectionary[input[i]];
                }
            } else {
                return `invalid number`;
            }
        }
        return sum;
    } else {
        return `invalid string length`;
    }

};

console.log(romanToInt("mm"));
