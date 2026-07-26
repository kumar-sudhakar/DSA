/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {

    if(x < 0) return false;
    let xCopy = x;
    let rem = 0;
    let rev = 0;


    while(xCopy > 0){
    rem = xCopy % 10;
    rev = (rev * 10) + rem;
    xCopy = Math.floor(xCopy / 10);
    }

    return x === rev;
};