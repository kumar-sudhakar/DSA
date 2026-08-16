/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let left = 0;
    let right = numbers.length - 1;

    while(left < right ){
      let add = numbers[left] + numbers[right];
        if( add > target ){
            right--;
        }
        else if(add < target){
            left++;
        }
        else{
            return [left+1 , right+1];
        }
        add = 0;
    }
};