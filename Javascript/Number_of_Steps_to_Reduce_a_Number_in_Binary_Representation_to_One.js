// leet code challenge 'Number of Steps to Reduce a Number in Binary Representation to One'
// problem link https://leetcode.com/problems/number-of-steps-to-reduce-a-number-in-binary-representation-to-one/description/

/**
 * @param {string} s
 * @return {number}
 */
var numSteps = function (s) {
  let res = 0;
  s = s.split("");

  while (s.length > 1) {
    if (s[s.length - 1] == "0") {
      s.pop();
    } else {
      s = addOne(s);
    }
    res += 1;
  }
  return res;
};

const addOne = (s) => {
  let i = s.length - 1;
  while (s[i] !== "0" && i >= 0) {
    s[i] = "0";
    i--;
  }
  if (i < 0) {
    s = ["1", ...s];
  } else {
    s[i] = "1";
  }

  return s;
};
