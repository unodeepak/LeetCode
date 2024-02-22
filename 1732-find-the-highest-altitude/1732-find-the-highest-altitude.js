/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
    let highest = 0;
    let len = gain.length;
    let sum = 0;
    for (let i = 0; i < len; i++) {
        sum += gain[i];
        highest = sum > highest ? sum : highest;
    }
    return highest;
};