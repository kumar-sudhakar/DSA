/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {

    let answer = [];
    for (let i = 0; i < nums.length; i++) {
        answer.push(nums[i] * nums[i]);
    }
    return answer.sort((a, b) => a - b)
};