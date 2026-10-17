/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    const words = s.split(" ");

    if (pattern.length !== words.length) {
        return false;
    }

    const map = new Map();
    const used = new Set();

    for (let i = 0; i < pattern.length; i++) {
        let char = pattern[i];
        let word = words[i];

        // Character already mapped
        if (map.has(char)) {
            if (map.get(char) !== word) {
                return false;
            }
        } 
        else {
            // Word already mapped to another character
            if (used.has(word)) {
                return false;
            }

            map.set(char, word);
            used.add(word);
        }
    }

    return true;
};