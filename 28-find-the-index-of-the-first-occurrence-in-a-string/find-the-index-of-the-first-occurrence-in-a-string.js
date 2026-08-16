/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    let windowSize = needle.length;
    for(let left = 0 ; left <= haystack.length - windowSize ; left++){
        let window = haystack.slice(left ,left + windowSize);
        if(window === needle){
            return left;
        }
    } 
    return -1;
};