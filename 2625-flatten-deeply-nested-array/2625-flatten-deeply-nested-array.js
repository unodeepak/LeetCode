/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */

var flat = function (arr, n) {
  let arr1 = [];

  function flatMe(arr, depth) {
    for (var i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i]) && n > depth) {
        flatMe(arr[i], depth + 1);
      } else {
        arr1.push(arr[i]);
      }
    }
  }
  
  flatMe(arr, 0);
  return arr1;
};