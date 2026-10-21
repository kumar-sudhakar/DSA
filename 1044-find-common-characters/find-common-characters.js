/**
 * @param {string[]} words
 * @return {string[]}
 */
var commonChars = function(words) {
    let common = new Array(26).fill(Infinity);

    for (let word of words) {
        let freq = new Array(26).fill(0);

        for (let ch of word) {
            let index = ch.charCodeAt(0) - 97;
            freq[index]++;
        }

        for (let i = 0; i < 26; i++) {
            common[i] = Math.min(common[i], freq[i]);
        }
    }

    let result = [];

    for (let i = 0; i < 26; i++) {
        while (common[i] > 0) {
            result.push(String.fromCharCode(i + 97));
            common[i]--;
        }
    }

    return result;
};