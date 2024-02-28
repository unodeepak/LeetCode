/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
  let maxJump = 0;
  let len = nums.length - 1;
  
  for (let i = 0; i <= len; i++) {
    if (i > maxJump) {
      return false;
    }
    maxJump = Math.max(maxJump, i + nums[i]);

    if (maxJump >= len) {
      return true;
    }
  }
  return false;
};