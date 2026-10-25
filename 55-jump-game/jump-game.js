/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    let maxReach = 0;

    for (let i = 0; i < nums.length; i++) {

        // Current index is unreachable
        if (i > maxReach) {
            return false;
        }

        // Update the farthest position we can reach
        maxReach = Math.max(maxReach, i + nums[i]);

        // We can reach the last index
        if (maxReach >= nums.length - 1) {
            return true;
        }
    }

    return true;
};