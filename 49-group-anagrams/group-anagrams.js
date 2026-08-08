/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    if(strs.length === 0) return "";

    let obj = {};
    for(let i = 0 ; i < strs.length ; i++){
        let sortedString = strs[i]
        .split("")
        .sort()
        .join("");

        if(!obj[sortedString] ){
            obj[sortedString] = [strs[i]]
        }
        else {
            obj[sortedString].push(strs[i]);
        }
    }
    return Object.values(obj);
};