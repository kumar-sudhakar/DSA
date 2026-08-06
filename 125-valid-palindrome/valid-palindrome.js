/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let left = 0;
    let right = s.length - 1;

    while (left < right) {

        // Skip non-alphanumeric characters from the left
        while (left < right && !/[a-z0-9]/i.test(s[left])) {
            left++;
        }

        // Skip non-alphanumeric characters from the right
        while (left < right && !/[a-z0-9]/i.test(s[right])) {
            right--;
        }

        // Compare characters (case-insensitive)
        if (s[left].toLowerCase() !== s[right].toLowerCase()) {
            return false;
        }

        left++;
        right--;
    }

    return true;
};