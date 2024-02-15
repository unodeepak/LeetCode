/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
  // return s.trim().split(" ").reverse().join(" ");  
    let strArr = [];
    s = s.split(" ");
    for (let i = 0; i < s.length; i++) {
        let word = s[i].trim();
        
        if (word.length > 0) {
           strArr.unshift(word)   
        }
    }
    
    return strArr.join(" ");
};