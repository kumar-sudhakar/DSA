/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let maxOnes = 0;
    let currOnes = 0;

    for( let i = 0 ; i < nums.length ; i++){
        if(nums[i] == 1){
            currOnes++;
        }
        else{
            maxOnes = Math.max(maxOnes , currOnes)
            currOnes = 0;
        }
    }

    return Math.max(maxOnes , currOnes)
};