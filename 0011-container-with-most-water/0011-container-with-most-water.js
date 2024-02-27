/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  let end = height.length - 1;
  let start = 0;
  let lMax = 0;
  let rMax = 0;
  let max = 0;

  while (end >= start) {
    if (height[start] > lMax) {
      lMax = height[start];
    }

    if (height[end] > rMax) {
      rMax = height[end];
    }
    let water = (end - start) * Math.min(lMax, rMax);
    max = Math.max(water, max);
    height[start] < height[end] ? start++ : end--;
  }
  
  return max;  
};