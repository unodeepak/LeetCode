/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    let max = candies[0];
    for (let i = 1; i < candies.length; i++) {
        max = Math.max(candies[i], max);
    }
    let arr = [];
    for (let i = 0; i < candies.length; i++) {
       candies[i] + extraCandies >= max ? arr.push(true) : arr.push(false);      
    }  
    
    return arr;
};