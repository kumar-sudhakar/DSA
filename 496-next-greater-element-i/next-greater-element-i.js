/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    let stack = [];
    let map = new Map();

    for(let i = nums2.length - 1 ; i >= 0 ; i--){
        while(stack.length !== 0 && stack[stack.length - 1] < nums2[i]){
            stack.pop()
        }
        if(stack.length === 0 ){
            map.set(nums2[i] , -1)
        }
        else{
            map.set(nums2[i] ,stack[stack.length -1])
        }
        stack.push(nums2[i]);
    }
    let ans = [];
    for(let i = 0 ; i < nums1.length ; i++){
       ans.push(map.get(nums1[i]));
    }
    return ans;
};