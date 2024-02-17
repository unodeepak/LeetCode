/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    s = s.split("").sort((a, b) => a.localeCompare(b));
    t = t.split("").sort((a, b) => a.localeCompare(b));
    return s.join("") == t.join("");
};