/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let lastNum = nums.length 
    let totalSum = lastNum*(lastNum+1)/2;
    let partialSum = 0;

    for(let i = 0; i < nums.length ; i++){
partialSum = partialSum + nums[i];
    }

    return totalSum - partialSum
};