/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let pointer1 = m-1;
    let pointer2 = n-1;

    for(let i = m+n-1 ; i >= 0 ; i--){
        if(pointer2 < 0 ) break;

        if(pointer1 >= 0 && nums1[pointer1] > nums2[pointer2]) {
            nums1[i] = nums1[pointer1];
            pointer1--;
        }
        else{
            nums1[i] = nums2[pointer2];
            pointer2--;
        }
    }
    return nums1;
};