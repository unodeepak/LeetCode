/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
   let arr = [...new Set(nums)];
    
    nums.length = arr.length;
    for (let i = 0; i < arr.length; i++) {
        nums[i] = arr[i];
    }
    
    return arr.length;
};