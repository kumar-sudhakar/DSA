/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
    let left = 0;
    let right = nums.length - 1;
    let answer = [-1, -1];

    while (left <= right) {
        mid = Math.floor((left + right) / 2);
        if (nums[mid] === target) {
            answer[0] = mid;
            right = mid - 1;
        }
        else if (target > nums[mid]) {
            left = mid + 1;
        }
        else {
            right = mid - 1;
        }
    }

    left = 0;
    right = nums.length - 1;

    while (left <= right) {
        mid = Math.floor((left + right) / 2);
        if (nums[mid] === target) {
            answer[1] = mid;
            left = mid + 1;
        }
        else if (target > nums[mid]) {
            left = mid + 1;
        }
        else {
            right = mid - 1;
        }
    }
    return answer;
};