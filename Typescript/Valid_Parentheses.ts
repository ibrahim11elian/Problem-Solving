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
  if (s.length < 2) return false;
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
  return true;
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
