/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    if (x < 0) return false;

    let rev = 0;
    let rem = 0;
    let num = x;

    while (num > 0) {
        rem = num % 10;
        rev = rev * 10 + rem;
        num = Math.floor(num / 10);
    }

    return rev === x;
};