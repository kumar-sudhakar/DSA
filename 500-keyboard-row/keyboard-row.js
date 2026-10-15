/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
    let rows = [
        "qwertyuiop",
        "asdfghjkl",
        "zxcvbnm"
    ];

    let result = [];

    for (let word of words) {
        let lower = word.toLowerCase();

        let row = rows.find(r => r.includes(lower[0]));

        let valid = true;

        for (let char of lower) {
            if (!row.includes(char)) {
                valid = false;
                break;
            }
        }

        if (valid) {
            result.push(word);
        }
    }

    return result;
};