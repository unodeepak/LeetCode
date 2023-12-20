/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let arr = [];
    for (let i = 0; i < nums.length; i++) {
        let flag = true;
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] == nums[j]) {
                flag = false;
                break;
            }
        }
        if (flag) arr.push(nums[i]);
    }
    
    nums.length = arr.length;
    for (let i = 0; i < arr.length; i++) {
        nums[i] = arr[i];
    }
    // nums = arr;
    
    return arr.length;
};