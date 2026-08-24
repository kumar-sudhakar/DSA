/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    let stack = [];
    for (let i = 0; i < s.length; i++) {
        if ("[({".includes(s[i])) {
            stack.push(s[i])
        }
        else {
            let top = stack.pop();
            if (
                (s[i] === ")" && top !== "(") ||
                (s[i] === "]" && top !== "[") ||
                (s[i] === "}" && top !== "{")

            ) {
                return false;
            }
        }
    }
    return stack.length === 0;
};