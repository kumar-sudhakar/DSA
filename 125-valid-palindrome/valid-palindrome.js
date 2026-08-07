/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    
    let newStr = s.toLowerCase();
    let i = 0;
    let j = newStr.length -1 ;

    while(i < j){
        if(!/[a-z0-9]/.test(newStr[i])){
            i++;
        }
         else if(!/[a-z0-9]/.test(newStr[j])){
            j--;
        }
        else if(newStr[i] === newStr[j]){
            i++;
            j--;
        }
        else{
           return false;
            }
    }
    return true;

};