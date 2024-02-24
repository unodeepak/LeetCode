/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let str = [...s];
    let open = [];
    let close = [];
    for (let i = 0; i < str.length; i++) {

        if ("({[".includes(str[i])) {
            let special = str[i] == "(" ? ")" : str[i] == "{" ? "}" : "]"
            open.push(str[i]);
            close.push(special);
        } else if (")}]".includes(str[i])) {
            if (str[i] != close.pop()) {
                return false;
            }
        }
    }
    
    return close.length == 0 ? true : false;
};