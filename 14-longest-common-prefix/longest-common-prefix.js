/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let x = 0;

    while(x < strs[0].length){
        for(let i = 1 ; i < strs.length ; i++){
            if( x >= strs[i].length || strs[0][x] !== strs[i][x]){
                return strs[0].substring(0,x);
            }
        }
        x++;
    }
    return strs[0];
};