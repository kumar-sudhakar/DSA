/**
 * @param {string} s
 * @return {number}
 */
var maxFreqSum = function(s) {
    let vowels = ["a" , "e" , "i" , "o" ,"u"];
    let maxVowels = 0;
    let maxConsonants = 0;
    let obj = {};

    for(let i=0; i < s.length; i++ ){
        let ch = s[i];
        if(obj[ch]){
            obj[ch]++;
        }
        else{
            obj[ch] = 1;
        }
    }

    for(let key in obj){
        if(vowels.includes(key)){
            maxVowels = Math.max(maxVowels , obj[key]);
        }
        else{
            maxConsonants = Math.max(maxConsonants , obj[key]);
        }
    }
    let total = maxVowels + maxConsonants;
    return total;
    
};