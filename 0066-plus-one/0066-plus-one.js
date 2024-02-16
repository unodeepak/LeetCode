/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
    let num = 1;
  for (let i = digits.length - 1; i >= 0; i--) {
      
      if (digits[i] + num == 10) {
          digits[i] = 0;
          if (i == 0) {
              digits.unshift(num);
          }
      } else {
          digits[i] = digits[i] + num;
          break;
      }
  }
    
    return digits;
};