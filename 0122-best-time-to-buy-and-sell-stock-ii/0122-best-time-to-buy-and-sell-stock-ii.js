/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let mProfit = 0;
    
    for (let i = 0; i < prices.length; i++) {
        if (prices[i] > prices[i - 1]) {
            mProfit += prices[i] - prices[i - 1];
        }        
    }
    return mProfit;
};