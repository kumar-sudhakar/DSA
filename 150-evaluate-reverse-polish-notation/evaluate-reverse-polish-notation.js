/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
    let stack = [];

    for (let i = 0; i < tokens.length; i++) {
        if (!isNaN(tokens[i])) {
            stack.push(Number(tokens[i]))
        }
        else {
            let b = stack.pop();
            let a = stack.pop();
            let val;

            if (tokens[i] === "+") {
                val = a + b;
            }
            else if (tokens[i] === "-") {
                val = a - b;
            }
            else if (tokens[i] === "*") {
                val = a * b;
            }
            else {
                val = Math.trunc(a / b)
            }
            stack.push(val)

        }

    }
    return stack[0];
};