/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    if(x < 2) return x ;
    let left = 0;
    let right = x;

    while(left <= right){
        let middle = Math.floor((left+right)/2);
        let sqr = middle * middle ;
        if(x === sqr) return middle;
    else if(sqr > x){
        right = middle - 1;
    }
    else{
        left = middle+1;
    }
    }
   return right;
};