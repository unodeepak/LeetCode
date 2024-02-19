/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    let obj = {};
    for (let i = 0; i < arr.length; i++) {
        if (obj.hasOwnProperty(arr[i])) {
            obj[arr[i]] = obj[arr[i]] + 1;
        } else {
            obj[arr[i]] = 1;
        }
    }
    
    let newArr = Object.values(obj);
    for (let i = 0; i < newArr.length; i++) {
        for (let j = i + 1; j < newArr.length; j++) {
            if (newArr[i] == newArr[j]) {
                return false;
            }
        }
    }
    
    return true;
};