/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        
        let left = 0;
        let right = n;

        while(left <= right ){
            let mid = Math.floor((left + right)/2);
            let checkApi = isBadVersion(mid)
            let checkApiPrev = isBadVersion(mid - 1)
            if(checkApi && !checkApiPrev ){
                return mid;
            }
            else if(checkApiPrev){
            right = mid - 1
            }
            else{
                left = mid + 1;
            }
        }
        return right;
    };
};