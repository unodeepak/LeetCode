/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
pattern = pattern.split("");
  s = s.split(" ");
  let pt = [...new Set(pattern)];
  let srr = [...new Set(s)];
  
  if (pattern.length == s.length && pt.length == srr.length) {
    let i = 0;
    let j = 0;
    let obj = {};

    while (i < pattern.length && j < s.length) {
      if (obj.hasOwnProperty(pattern[i])) {
        if (obj[pattern[i]] != s[j]) {
          return false;
        }
      } else {
        obj[pattern[i]] = s[j];
      }

      i++;
      j++;
    }
    return true;
  } else {
    return false;
  }
}