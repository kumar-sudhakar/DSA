/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(nums) {
    let left = 0;
    let right = nums.length - 1;

    while(left <= right){
        let mid = Math.floor((left+right)/2);
        if(nums[mid] === nums[mid - 1]){
        let leftCount = mid-1-left ; 
        if(leftCount % 2 === 1){
            right = mid - 2;
        }
        else {
            left = mid + 1;
        }
        } 
        else if(nums[mid] === nums[mid+1]){
          leftCount = mid - left;;
          if(leftCount % 2 === 1){
            right = mid - 1;
          }
          else{
            left = mid + 2;
          }
        }
        else{
            return nums[mid];
        }
    }
};