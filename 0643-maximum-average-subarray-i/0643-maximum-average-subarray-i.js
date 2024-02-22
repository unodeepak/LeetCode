/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

var findMaxAverage = function(nums, k) {
    let len = nums.length;
    let sum = 0;
    for (let i = 0; i < k; i++) {
        sum += nums[i];
    }
    let sum1 = sum;
    for (let i = k; i < len; i++) {
        sum = sum + nums[i] - nums[i - k];
        sum1 = sum1 > sum ? sum1 : sum;
    }
    
    return sum1 / k;
    
//     const getSum = (s, e) => {
//         let sum = 0;

//         while (e > s) {
//             sum += nums[s];
//             s++;
//         }
//         return sum;
//     }
    
//     let sum = getSum(0, k); // 5
//     for (let i = 1; i < len; i++) {
//         if (len >= i + k) {
//             let sum1 = getSum(i, i + k);
//             if (sum1 > sum) {
//                 sum = sum1;
//             }   
//         } else {
//             break;
//         }
//     }
//     sum = sum / k;
//     return sum
};