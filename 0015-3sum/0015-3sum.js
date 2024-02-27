/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    const result = [];

  nums.sort((a, b) => a - b); 

  for (let i = 0; i < nums.length - 2; i++) {
    if (i === 0 || (i > 0 && nums[i] !== nums[i - 1])) {
      let left = i + 1;
      let right = nums.length - 1;
      const target = -nums[i];

      while (left < right) {
        if (nums[left] + nums[right] === target) {
          result.push([nums[i], nums[left], nums[right]]);
          while (left < right && nums[left] === nums[left + 1]) left++; 
          while (left < right && nums[right] === nums[right - 1]) right--;
          
          left++;
          right--;
        } else if (nums[left] + nums[right] < target) {
          left++;
        } else {
          right--;
        }
      }
    }
  }

  return result;
//   let len = nums.length;
//   let i = 0;
//   let j = 1;
//   let k = 2;
//   let arr = [];
//   let newArr = [];

//   while (len > i) {
//     if ((nums[i] + nums[j] + nums[k]) == 0 && i != j && i != k && j != k) {
//       let array = [nums[i], nums[j], nums[k]];
//       array.sort((a, b) => a - b);
//       let str = array.join("");

//       if (!newArr.includes(str)) {
//         newArr.push(str);
//         arr.push(array);
//       }
//     }

//     k++;
//     if (k % len == 0 && k != 0) {
//       k = 0;
//       j++;
//     }

//     if (j % len == 0 && j != 0) {
//       j = 0;
//       k = 0;
//       i++;
//     }
//   }

//   return arr;
};