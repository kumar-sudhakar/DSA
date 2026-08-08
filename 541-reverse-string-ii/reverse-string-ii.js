/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
    let str = s.split("");

    for(let i = 0 ; i < str.length ; i += k*2){
       let left = i;
       let right = Math.min(i + k -1 , str.length -1);

       while(left < right){
        let temp = str[left];
        str[left] = str[right];
        str[right] = temp ;
        left++;
        right--;
       }

    }
    return str.join("");
};