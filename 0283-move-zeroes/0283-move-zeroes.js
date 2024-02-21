/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let len = nums.length;
    let ind = 0;
           
    for (let i = 0; i < len; i++) { 
        if (nums[i] !== 0) {
            [nums[i], nums[ind]] = [nums[ind], nums[i]];
            ind++;
        }
    }
};