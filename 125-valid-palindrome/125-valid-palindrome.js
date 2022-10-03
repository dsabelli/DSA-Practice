/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
 const pArr=[]
 const sentence=s.toLowerCase()
 for (let i =0;i<sentence.length;i++){

 if(sentence.charCodeAt(i) >=48 && sentence.charCodeAt(i) <=57 || sentence.charCodeAt(i) >=97 && sentence.charCodeAt(i) <=122){
 pArr.push(sentence[i]);
 }  
} 
  const palindrome = pArr.join("")
  const reversePalindrome = pArr.reverse().join("")
  if(palindrome===reversePalindrome)return true
    return false
};