function lengthOfLastWord(s: string): number {
    let strArr:string[] = s.split(" ")
    let newStr:string[] = [];

    for (let str of strArr) {
        if (str?.length) {
            newStr.push(str);
        }
    }
    return newStr[newStr.length - 1].length;
};