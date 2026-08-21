/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function(s, k) {
    
    let vowel = [ "a" , "e" , "i" , "o" , "u"];
    let left = 0;
    let count = 0;
    let max = -Infinity;

    for(let right = 0 ; right < s.length ; right++){
        let window = right - left + 1;
      if(vowel.includes(s[right])){
        count ++;
      }
      
      if(window === k){
      max  = Math.max(max , count);
      if(vowel.includes(s[left])){
        count--;
      }
      left++;
      }

    }
    return max;

};