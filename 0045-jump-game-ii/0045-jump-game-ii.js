var jump = function(nums) {
    const n = nums.length;

    if (n === 1) {
        return 0; // Already at the last position
    }

    let jumps = 0; // Count of jumps
    let currentMaxReach = 0; // The maximum index you can reach with the current number of jumps
    let nextMaxReach = 0; // The maximum index you can reach with the next jump

    for (let i = 0; i < n - 1; i++) {
        nextMaxReach = Math.max(nextMaxReach, i + nums[i]);

        if (i === currentMaxReach) {
            jumps++;
            currentMaxReach = nextMaxReach;
        }
    }

    return jumps;
};