/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
  // let num = 1;
    
  // for (let i = 1; i <= Math.abs(n); i++) {
  //     if (n > 0) {
  //         num = num * x;
  //     } else {
  //         num = x * 0.5;
  //         x = num
  //     }
  //  }
    // if (n > 0) {
    x = Math.pow(x,n);
    // } 

   return x;
};