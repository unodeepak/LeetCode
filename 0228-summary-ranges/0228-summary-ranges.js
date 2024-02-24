/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    let len = nums.length;
    let initVal = nums[0];
    let arr = [];
    let inc = 1;
    
    for (let i = 1; i <= len; i++) {
        if (initVal + inc !== nums[i]) {
            if (inc == 1) {
                arr.push(`${nums[i-1]}`);
            } else {
                arr.push(`${initVal}->${nums[i - 1]}`)
            }
            inc = 1;
            initVal = nums[i];
        } else {
            inc++;
        }
    }
    
    return arr;
};