/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
    let n = s.length;

    for (let len = 1; len <= n / 2; len++) {

        // substring length must divide the whole string
        if (n % len !== 0) continue;

        let pattern = s.substring(0, len);

        // repeat pattern and compare
        let repeated = pattern.repeat(n / len);

        if (repeated === s) {
            return true;
        }
    }

    return false;
};