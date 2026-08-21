/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    let set = new Set();
    let left = 0;

    for(let right = 0 ; right < nums.length ; right++){
      if(set.has(nums[right])){
        return true;
      }
      set.add(nums[right]);

      if((right - left + 1 ) > k){
        set.delete(nums[left]);
        left++;
      }
    }
    return false;
};