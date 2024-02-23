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
    let sum1 = getSum(1)
    for (var i = 0; i < len; i++) {
        if (sum == sum1) {
            break;
        }
        sum += nums[i];
        sum1 -= nums[i + 1];
    }
    
    return i == len ? -1 : i;
};