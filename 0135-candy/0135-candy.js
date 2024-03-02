/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function(ratings) {
  let len = ratings.length - 1;
  let candies = new Array(len + 1).fill(1);
  console.log({candies})

  for (let i = 1; i <= len; i++) {
    if (ratings[i] > ratings[i - 1]) {
      candies[i] = candies[i - 1] + 1;
    }
  }

  for (let i = len - 1; i >= 0; i--) {
    if (ratings[i] > ratings[i + 1]) {
      candies[i] = Math.max(candies[i + 1] + 1, candies[i]);
    }
  }

  let sum = candies.reduce((s, init) => s + init, 0)
  return sum;
};