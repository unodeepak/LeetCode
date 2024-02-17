/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    magazine = magazine.split("");
    
    let i = 0;
    while (i < ransomNote.length) {
    
      if (magazine.includes(ransomNote[i])) {
            magazine[magazine.indexOf(ransomNote[i])] = "_";
            i++;
        } else {
            return false;
        }
    }
    return true;
};