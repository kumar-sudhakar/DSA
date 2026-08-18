/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    let s1L = s1.length;

    let arrS1 = new Array(26).fill(0);
    let arrS2 = new Array(26).fill(0);

    for(let i = 0 ; i < s1L ; i++){
        arrS1[s1.charCodeAt(i) - 97] ++;
        arrS2[s2.charCodeAt(i) - 97] ++;
    }
    let i =0;
    let j = s1L-1;

   while(j < s2.length){
       
        if(isEqual(arrS1 , arrS2)){
            return true;
        }
        else{
             arrS2[s2.charCodeAt(i) - 97]--;
             i++;
             j++; 
              arrS2[s2.charCodeAt(j) - 97]++ ;

        }
    }
   return false;
};

function isEqual(arrS1 , arrS2){
for(let i =0 ; i < 26 ; i++){
        if(arrS1[i] !== arrS2[i]){
            return false;
        }
 }
return true;
}

 