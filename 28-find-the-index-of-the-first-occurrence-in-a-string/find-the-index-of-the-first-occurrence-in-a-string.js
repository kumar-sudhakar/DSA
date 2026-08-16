/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    let windowSize = needle.length;
    
    for(let i = 0 ; i <= haystack.length - windowSize ; i++){
      let count = true;
      for(let j = 0 ; j < windowSize; j++){
        if(haystack[i+j] !== needle[j]){
            count = false;
            break;
        }
      }
      if(count){
        return i;
      }
    }
    return -1;
};