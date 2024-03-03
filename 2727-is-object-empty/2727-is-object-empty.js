/**
 * @param {Object|Array} obj
 * @return {boolean}
 */
var isEmpty = function(obj) {
  let compareVal = "{}";
  if (Array.isArray(obj)) {
    compareVal = "[]";
  }
  return JSON.stringify(obj) == compareVal;    
};