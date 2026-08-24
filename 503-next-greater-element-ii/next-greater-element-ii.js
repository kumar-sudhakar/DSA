/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function(nums) {
    let stack = [];
    let answer = new Array(nums.length).fill(-1);

    for(let i = nums.length * 2 -1 ; i >= 0 ; i--){

        index = i % nums.length ;
        while(stack.length > 0 && nums[index] >= stack[stack.length-1]){
            stack.pop();
        }
        if(stack.length !== 0){
            answer[index] = stack[stack.length-1];
        }
        stack.push(nums[index]);
    }
    return answer;
};