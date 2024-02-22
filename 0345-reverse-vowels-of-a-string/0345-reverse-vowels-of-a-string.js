/**
 * @param {string} s
 * @return {string}
 */

const isVowel = (char) => "aeiouAEIOU".includes(char);

var reverseVowels = function(s) {
    let str = [...s];
    let len = str.length;
    let i = 0;
    let j = len - 1;
    
    while (len > i && j > i) {
        if (!isVowel(str[j])) {
            j--;
        } 
        
        if (!isVowel(str[i])) {
            i++;
        }
        
        if (isVowel(str[i]) && isVowel(str[j])) {
            [str[i], str[j]] = [str[j], str[i]];            
            i++;
            j--;
        } 
        
    }
    return str.join("");
};