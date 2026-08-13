/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function(nums) {
    let stack = [];
    let answer = new Array(nums.length).fill(-1);

    for(let i = nums.length * 2 - 1 ; i >= 0 ; i--){
        let index = i % nums.length ;
      while(nums.length !== 0 && nums[stack[stack.length-1]] <= nums[index]){
        stack.pop();
      }
      if(stack.length !== 0){
        answer[index] = nums[stack[stack.length - 1]];
      }
      stack.push(index)
    }
    return answer;
};