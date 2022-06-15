/**
 * @param {number} x
 * @return {boolean}
 */
 const isPalindrome = function(x) {
    let s = '' + x;
    let l = 0;
    let r = s.length -1;
    while (l < r) {
        if (s[l] !== s[r]) return false;
        l++;
        r--;
    }
    return true;
};