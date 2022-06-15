/**
 * @param {string[]} strs
 * @return {string}
 */
 const longestCommonPrefix = function(strs) {
  if (!strs.length) return '';
  
  let out = '';
  let pref = strs[0];
  
  myloop:
  for (let i = 0; i < pref.length; i++) {
      for (let j = 1; j < strs.length; j++) {
          if (strs[j][i] !== pref[i]) {
              break myloop;
          }
      }
      out += pref[i];
  }
  return out;
};