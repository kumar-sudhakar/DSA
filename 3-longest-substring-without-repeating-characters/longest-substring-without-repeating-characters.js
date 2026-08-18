/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let map = {};
    let left = 0;
    let ans = 0;

    for(let right = 0 ; right < s.length ; right++){
        if(map[s[right]] !== undefined ){
            left = Math.max(left , map[s[right]] + 1); 
        }

        map[s[right]] = right;
        ans = Math.max(ans , (right - left) + 1);
    }
    return ans;
};