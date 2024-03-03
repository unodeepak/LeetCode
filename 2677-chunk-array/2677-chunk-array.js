/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function(arr, size) {
  let arr2 = [];
  let arr1 = [];
  
  for (let i = 0; i < arr.length; i++) {
    arr2.push(arr[i])
    if ((i + 1) % size == 0){
      arr1.push(arr2)  
      arr2 = [];
    }
  }
  if (arr2.length != 0) {
    arr1.push(arr2);
  }
  
  return arr1;
};
