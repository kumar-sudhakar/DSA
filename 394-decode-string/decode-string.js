/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    let stack = [];
    let curr = "";
    let num = 0;

    for (let ch of s) {

        if (!isNaN(ch)) {
            num = num * 10 + Number(ch);
        }

        else if (ch === "[") {
            stack.push([curr, num]);

            curr = "";
            num = 0;
        }

        else if (ch === "]") {
            let [prev, count] = stack.pop();

            curr = prev + curr.repeat(count);
        }

        else {
            curr += ch;
        }
    }

    return curr;
};