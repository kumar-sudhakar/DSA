/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
   if(s.length !== t.length ) return false;

    let obj = {};
    for(let i = 0 ; i < s.length ; i++ ){
        if(!obj[s[i]] ){
           obj[s[i]] = 1;
        }
        else{
            obj[s[i]] ++;
        }
    }
    for(let j = 0 ; j < t.length ; j++){
        if( !obj[t[j]] ){
            return false;
        }
        else{
            obj[t[j]]--;
        }
    }
    return true;
};