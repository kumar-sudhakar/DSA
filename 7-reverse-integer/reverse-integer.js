/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let min = -2147483648;
    let max = 2147483648;
     
     let rev = 0;
     let rem = 0;
     let xCopy = Math.abs(x);

    while(xCopy > 0){
        rem = xCopy%10;
        rev = (rev * 10) + rem;
        xCopy =  Math.floor(xCopy/10)
    }
             
  if( x > 0){
        return (rev < min || rev > max) ? 0 : rev;
  }
  else {
        return (rev < min || rev > max) ? 0 : -rev;
  }
};