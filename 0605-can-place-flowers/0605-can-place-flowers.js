/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    for (let i = 0; i < flowerbed.length; i++) {
        if (flowerbed[i] == 0 && flowerbed[i - 1] != 1 && flowerbed[i + 1] != 1) {
            n--;
            flowerbed[i] = 1;
        }
        
        if (n == 0){
            break;
        }
    }  
    
    return n > 0 ? false : true;
};