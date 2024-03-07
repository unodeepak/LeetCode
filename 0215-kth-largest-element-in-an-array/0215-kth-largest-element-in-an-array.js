/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
  let sort = nums.toSorted((a,b) => b - a);
  // let obj = {...sort};
  
  return sort[k - 1];
};