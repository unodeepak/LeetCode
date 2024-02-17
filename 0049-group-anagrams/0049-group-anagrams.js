/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  let strArr = {};
  let i = 0;

  while (i < strs.length) {
    let str = strs[i]?.split("").sort();

    if (!strArr.hasOwnProperty(str)) {
      strArr[str] = [];
    }
    
    strArr[str].push(strs[i]);
    i++;
  }

  return Object.values(strArr);
};