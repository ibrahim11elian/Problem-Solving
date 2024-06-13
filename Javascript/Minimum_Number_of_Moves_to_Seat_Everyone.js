// leet code challenge 'Minimum Number of Moves to Seat Everyone'
// problem link https://leetcode.com/problems/Minimum-Number-of-Moves-to-Seat-Everyone/description/

/**
 * @param {number[]} seats
 * @param {number[]} students
 * @return {number}
 */
var minMovesToSeat = function (seats, students) {
  seats.sort((a, b) => a - b);
  students.sort((a, b) => a - b);

  let res = 0;
  for (let i = 0; i < seats.length; i++) {
    res += Math.abs(seats[i] - students[i]);
  }

  return res;
};
