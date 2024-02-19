/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
    let i = 0, fuel = 0, totalDiff = 0;
    let ind = 0;
    
    while (i < gas.length) {
        let diff = gas[i] - cost[i];
        totalDiff += diff;
        fuel += diff;
        
        if (fuel < 0) {
            fuel = 0;
            ind = i + 1;
        }
        i++;
    }
    
    return totalDiff < 0 ? -1 : ind;
};