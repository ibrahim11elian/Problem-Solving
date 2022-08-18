// leet code challenge 'Valid Parentheses'
// problem link https://leetcode.com/problems/valid-parentheses

function isValid(s: string): boolean {
  let i: number = 0;
  const open: object = {
    "(": 1,
    "{": 2,
    "[": 3,
  };
  const closed: object = {
    ")": 1,
    "}": 2,
    "]": 3,
  };
  let arr: string[] = [];
  while (s[i]) {
    if (s[i] in open) {
      arr.push(s[i]);
    } else if (s[i] in closed) {
      if (match(s[i] as ")" | "}" | "]") === arr[arr.length - 1]) {
        arr.pop();
      } else {
        return false;
      }
    } else {
      return false;
    }
    i++;
  }

  return arr.length === 0 ? true : false;
}

function match(s: ")" | "}" | "]"): string {
  switch (s) {
    case ")":
      return "(";
    case "}":
      return "{";
    case "]":
      return "[";
  }
}

console.log(isValid("()[]{}"));
