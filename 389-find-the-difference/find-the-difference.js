/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    let result = 0;

    for (let ch of s) {
        result ^= ch.charCodeAt(0);
    }

    for (let ch of t) {
        result ^= ch.charCodeAt(0);
    }

    return String.fromCharCode(result);
};