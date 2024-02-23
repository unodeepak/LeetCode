/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    let len = nums.length;
    
    const getSum = (s) => {
        let sum = 0;
        for (let i = s; i < len; i++) {
            sum += nums[i];
        }
        return sum;
    }
    
    let sum = 0;
    for (var i = 0; i < len; i++) {
        if (sum == getSum(i+1)) {
            break;
        }
        sum += nums[i];
    }
    
    return i == len ? -1 : i;
};