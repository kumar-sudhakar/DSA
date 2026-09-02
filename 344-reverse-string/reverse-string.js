/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
    function reverse(left, right) {

        if (left >= right) {
            return;
        }

        let temp = s[left];
        s[left] = s[right];
        s[right] = temp;

        reverse(left + 1, right - 1);

    }

    reverse(0, s.length - 1)
};