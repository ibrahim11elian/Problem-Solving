/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
  // if whitespaces then ignore.
  s = s.trimStart(" ");

  const regEx = /^((-?|\+?)\d+)/i;
  if (s.match(regEx)) {
    const number = Number(s.match(regEx)[0]);
    if (valid(number)) return number;
    const max = Math.pow(2, 31) - 1;
    const min = -Math.pow(2, 31);
    return number < 1 ? min : max;
  } else {
    return 0;
  }
};

let valid = (number) => {
  if (number > -Math.pow(2, 31) - 1 && number < Math.pow(2, 31)) return true;
  return false;
};

console.log(myAtoi("-2147483649"));
