/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let len = nums.length;
    let c = 0;
           
    for (let i = 0; i < len; i++) {        
        if (nums[i] == 0) {
            let ind = i;
            
            while (len - 1 > ind) {
                let temp = nums[ind];
                nums[ind] = nums[ind + 1];
                nums[ind + 1] = temp;
                
                ind++;   
            }
            if (nums[i] == 0) {
                i--;
                c++;
            }
        }
        if (c == len) {
            break;
        }
    }
};