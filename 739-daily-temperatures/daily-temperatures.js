/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    let stack = [];
    let answer = new Array(temperatures.length).fill(0);

    for(let i = temperatures.length-1; i >= 0 ; i-- ){

        while(stack.length > 0 && temperatures[i] >= temperatures[stack[stack.length-1]]){
            stack.pop();
        }
        if(stack.length !== 0){
          answer[i] = stack[stack.length-1] - i;
        }
        stack.push(i)
    }
    return answer;
};