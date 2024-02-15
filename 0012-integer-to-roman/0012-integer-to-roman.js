/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    let roman = [
        { key: "M", value: 1000 },
        { key: "CM", value: 900 },
        { key: "D", value: 500 },
        { key: "CD", value: 400 },
        { key: "C", value: 100 },
        { key: "XC", value: 90 },
        { key: "L", value: 50 },
        { key: "XL", value: 40 },
        { key: "X", value: 10 },
        { key: "IX", value: 9 },
        { key: "V", value: 5 },
        { key: "IV", value: 4 },
        { key: "I", value: 1 },
    ];
    
    let romanNum = "";
    let ind = 0;
    while (num > 0) {
        if (num >= roman[ind].value) {
            romanNum += roman[ind].key;
            num-= roman[ind].value;
        } else {
            ind++;
        }
    }
    
    return romanNum;
};