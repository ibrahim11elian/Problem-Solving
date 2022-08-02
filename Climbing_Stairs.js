
// leet code challenge 'Climbing Stairs'
// problem link https://leetcode.com/problems/climbing-stairs/

var climbStairs = function (n) {
    if (n == 1 || n == 0) return 1;

    let first = 1;
    let second = 2;

    for (let i = 3; i <= n; i++) {
        let third = first + second;
        first = second;
        second = third;
    }
    return second;

};


// this code also work but its ecxeed the time limit on leetcode => it's like fibonacci

// /**
//  * @param {number} n
//  * @return {number}
//  */
// var climbStairs = function (n) {
//     if (n === 0) {
//         return 0;
//     } else if (n === 1) {
//         return 1;
//     } else if (n === 2) {
//         return 2;
//     } else {
//         return climbStairs(n - 1) + climbStairs(n - 2);
//     }
// };

console.log(climbStairs(45));