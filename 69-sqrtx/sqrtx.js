/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    if (x < 2 ) return x;
    let left = 1;
    let right = x;
    
    while(left <= right){
        let mid = Math.floor((left + right) / 2);

        if(mid * mid === x){
            return mid;
        }
        else if(mid * mid > x ){
            right = mid - 1;
        }
        else{
            left = mid + 1;
        }
    }
    return right;
};