/**
 * @param {Function} fn
 * @return {Object}
 */
Array.prototype.groupBy = function(fn) {
  let arr = [];
  let arr1 = {};
  let c = 1;
  
  for (let item of this) {
    let key = fn(item);
    
    if (arr1[key]) {
      arr1[key].push(item);
    } else {
      arr.push(key);
      arr1[key] = [item];
    }
  }
  return arr1;
};

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */