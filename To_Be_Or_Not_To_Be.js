// leet code challenge 'To Be Or Not To Be'
// problem link https://leetcode.com/problems/to-be-or-not-to-be/description

/**
 * @param {string} val
 * @return {Object}
 */
var expect = function (val) {
  return {
    toBe: (compair) => {
      if (val === compair) return true;
      else throw new Error("Not Equal");
    },
    notToBe: (compair) => {
      if (val !== compair) return true;
      else throw new Error("Equal");
    },
  };
};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */
