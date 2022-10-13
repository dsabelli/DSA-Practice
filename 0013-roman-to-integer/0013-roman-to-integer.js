/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let n=0
    let int
    let nextInt
    let roman
    let nextRoman
    const hashMap = {I:1, V:5,X:10,L:50,C:100,D:500,M:1000}
    
    for (let i =0; i<s.length; i++){
        roman = s[i]
        nextRoman = s[i+1]
        int = hashMap[roman]
        nextInt = hashMap[nextRoman]
        if ((int/nextInt)===0.1||(int/nextInt)===0.2){
            n-=int
        }
        else{n+=int}
    }
    return n
};