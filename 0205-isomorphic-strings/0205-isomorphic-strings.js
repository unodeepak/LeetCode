/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
  let len = s.length;
  let str1 = "";
  let str2 = "";
  for (let i = 1; i < len; i++) {
      str1 += s[i - 1];
      str2 += t[i - 1];
      
      if (str1.lastIndexOf(s[i]) !== str2.lastIndexOf(t[i])) {
          return false;
      }
  }
      
  return s.length == t.length ? true : false;
};