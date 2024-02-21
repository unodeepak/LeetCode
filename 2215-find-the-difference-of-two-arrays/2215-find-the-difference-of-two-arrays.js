/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {
    let arr = [];
    let arr1 = [];
    for (let num of nums1) {
        if (!nums2.includes(num) && !arr1.includes(num)) {
            arr1.push(num)
        }
    }
    arr.push(arr1);
    arr1 = [];
    
    for (let num of nums2) {
        if (!nums1.includes(num) && !arr1.includes(num)) {
            arr1.push(num)
        }
    }
    arr.push(arr1);
    
    return arr;
};