/**
 * @param {Function} fn
 * @return {Object}
 */
Array.prototype.groupBy = function(fn) {
  let arr = {};
  
  for (let item of this) {
    let key = fn(item);
    
    if (arr[key]) {
      arr[key].push(item);
    } else {
      arr[key] = [item];
    }
  }
  return arr;
};

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */