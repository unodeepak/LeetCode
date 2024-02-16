/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  s = s.toLowerCase();
    let word = "";
    let word1 = "";
  for (let char of s) {
      if ((char.charCodeAt() >= 97 && char.charCodeAt() <= 122) || (char.charCodeAt() >= 48 && char.charCodeAt() <= 57)) {
          word += char;
          word1 = char + word1;
      }
  }
    
    if (word == word1) {
        return true;
    } else {
        return false;
    }
};