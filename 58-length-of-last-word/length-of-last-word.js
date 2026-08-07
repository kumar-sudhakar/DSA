/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let count = 0;
    let strLength = s.length-1;

    while(strLength >= 0){
       if(s[strLength] !== " "){
        count++;
       }
      else if(count > 0){
        break;
      }
      strLength--;
    }
    return count;

};