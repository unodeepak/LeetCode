/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
     a = BigInt("0b" + a);
     b = BigInt("0b" + b);
     let c = BigInt(a + b)
     return c.toString(2);
};