/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    if (s.length !== t.length) return false;

    let objST = {};
    let objTS = {};

    for (let i = 0; i < s.length; i++) {

        if (objST[s[i]] !== undefined && objST[s[i]] !== t[i]) {
            return false;
        }

        if (objTS[t[i]] !== undefined && objTS[t[i]] !== s[i]) {
            return false;
        }

        objST[s[i]] = t[i];
        objTS[t[i]] = s[i];
    }

    return true;
};