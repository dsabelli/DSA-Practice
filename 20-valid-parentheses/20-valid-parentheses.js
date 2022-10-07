/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack =[]
    for (let p of s){
        if (p==="(")stack.push(")")
        else if (p==="{")stack.push("}")
        else if (p==="[")stack.push("]")
         else{if(stack.pop()!==p)return false}

         
    }
   if (stack.length)return false
    return true
    
}