/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let n = nums.length;
    let left = 0;
    let right = nums.length - 1;
    let answer = [];

    for(let i = n-1; i >= 0 ; i--){

        let leftSquare = nums[left] * nums[left];
        let rightSquare = nums[right] * nums[right];

        if(leftSquare > rightSquare){
            answer[i] = leftSquare;
            left++;
        }else{
            answer[i] = rightSquare;
            right--;
        }
    }
    return answer;
};