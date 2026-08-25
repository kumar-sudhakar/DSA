/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let min = -2147483648;
    let max = 2147483648;
    let rev = 0;
    let rem = 0;
    let val = Math.abs(x)

    while(val > 0){
        rem = val % 10;
        rev = rev * 10 + rem;
        val = Math.floor(val / 10);
    }

    if(x > 0){
        return (min > rev || max < rev ) ? 0 : rev;
    }
    else {
        return (min > rev || max < rev ) ? 0 : -rev;
    }
};