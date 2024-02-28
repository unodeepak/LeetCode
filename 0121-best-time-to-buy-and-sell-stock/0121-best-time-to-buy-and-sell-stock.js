/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  // let max = 0;
  // for (let i = 0; i < prices.length; i++) {
  //   for (let j = i + 1; j < prices.length; j++) {
  //     let diff = prices[j] - prices[i]
  //     if (prices[i] < prices[j] && diff > max) {
  //       max = diff;
  //     }
  //   }
  // }
  // return max;
  
  let minPrice = Infinity;
  let maxProfit = 0;

  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < minPrice) {
      minPrice = prices[i];
    } else if (prices[i] - minPrice > maxProfit) {
      maxProfit = prices[i] - minPrice;
    }
  }

  return maxProfit;
};