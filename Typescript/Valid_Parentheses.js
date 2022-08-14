function isValid(s) {
    var i = 0;
    var open = {
        "(": 1,
        "{": 2,
        "[": 3
    };
    var closed = {
        ")": 1,
        "}": 2,
        "]": 3
    };
    var arr = [];
    while (s[i]) {
        if (s[i] in open) {
            arr.push(s[i]);
        }
        else if (s[i] in closed) {
            if (match(s[i]) === arr[arr.length - 1]) {
                arr.pop();
            }
            else {
                return false;
            }
        }
        else {
            return false;
        }
        i++;
    }
    return arr.length === 0 ? true : false;
}
function match(s) {
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
