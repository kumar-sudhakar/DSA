/**
 * @param {string} num
 * @return {string}
 */
var largestOddNumber = function(num) {
    let nums = num;
    let last = nums.length-1;

    while(last >= 0){
        if(nums[last] % 2 === 0){
            last--;
        }
        else{
            return nums.substring(0,last+1);
        }
    }
    return "";
};