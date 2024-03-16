/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function(arr1, arr2) {
    const idMap = new Map();

    // Merge arr1 objects
    for (const obj of arr1) {
        idMap.set(obj.id, { ...obj });
    }

    // Merge arr2 objects
    for (const obj of arr2) {
        const existingObj = idMap.get(obj.id);
        if (existingObj) {
            // Merge properties from arr2 into existing object
            for (const [key, value] of Object.entries(obj)) {
                if (key !== "id") {
                    existingObj[key] = value;
                }
            }
        } else {
            idMap.set(obj.id, { ...obj });
        }
    }

    // Sort result array based on id
    const sortedResult = [...idMap.values()].sort((a, b) => a.id - b.id);

    return sortedResult;
};