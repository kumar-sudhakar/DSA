/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    
    let left = 0;
    let max = -Infinity;
    let sum = 0;
    for(let right = 0 ; right < nums.length; right++){
        sum = sum + nums[right];
        if((right-left + 1 ) === k){
            max = Math.max(sum , max);
            sum = sum - nums[left];
            left++
        }
    }
    return max/k;
};