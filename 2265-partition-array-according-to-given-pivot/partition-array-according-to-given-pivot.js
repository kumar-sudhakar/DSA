/**
 * @param {number[]} nums
 * @param {number} pivot
 * @return {number[]}
 */
var pivotArray = function (nums, pivot) {
    let answer = [];

    for (let num of nums) {
        if (num < pivot) {
            answer.push(num);
        }
    }

    for (let num of nums) {
        if (num === pivot) {
            answer.push(num);
        }
    }

    for (let num of nums) {
        if (num > pivot) {
            answer.push(num)
        }
    }
    return answer;
};