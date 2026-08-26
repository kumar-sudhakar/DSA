/**
 * @param {number} n
 * @return {boolean}
 */
var isUgly = function(x) {
    if( x <= 0) return false;

    while(x % 2 === 0){
        x = x/2;
    }

    while(x % 3 === 0){
        x = x/3;
    }

    while(x % 5 === 0){
        x = x/5;
    }

    return x === 1;
};
