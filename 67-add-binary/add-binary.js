/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
    let i = a.length - 1;
    let j = b.length - 1;

    let answer = "";
    let carry = 0;

    while (i >= 0 || j >= 0 || carry > 0) {
      let sum = carry;

        if (i >= 0) {
            sum += Number(a[i]);
            i--;
        }

        if (j >= 0) {
            sum += Number(b[j]);
            j--;
        }

        answer = (sum % 2) + answer;
        carry = Math.floor(sum / 2);
    }
    return answer;
};