/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
    if (num1 === "0" || num2 === "0") {
        return "0";
    }

    let result = new Array(num1.length + num2.length).fill(0);

    for (let i = num1.length - 1; i >= 0; i--) {
        for (let j = num2.length - 1; j >= 0; j--) {

            let mul = Number(num1[i]) * Number(num2[j]);

            let p1 = i + j;
            let p2 = i + j + 1;

            let sum = mul + result[p2];

            result[p2] = sum % 10;
            result[p1] += Math.floor(sum / 10);
        }
    }

    while (result[0] === 0) {
        result.shift();
    }

    return result.join("");
};