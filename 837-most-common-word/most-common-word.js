/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function(paragraph, banned) {
    paragraph = paragraph.toLowerCase();

    // Remove punctuation and get words
    let words = paragraph.split(/[^a-z]+/);

    let bannedSet = new Set(banned);
    let map = new Map();

    let answer = "";
    let maxCount = 0;

    for (let word of words) {
        if (word === "" || bannedSet.has(word)) {
            continue;
        }

        let count = (map.get(word) || 0) + 1;
        map.set(word, count);

        if (count > maxCount) {
            maxCount = count;
            answer = word;
        }
    }

    return answer;
};