function mergeAlternately(word1: string, word2: string): string {
let order:string[] = word1.split("");
let pay:string[] = word2.split("");

let str:string = "";
let len: number = order?.length > pay.length ? order?.length : pay?.length;

    for (let i:number = 0; i < len; i++) {
        if (order[i]) {
            str += order[i];
         }
         if (pay[i]) {
             str += pay[i];
         }
    }
    return str;
}