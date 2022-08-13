/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    const answer=[]
    for (let i=1;i<=n;i++){
          i%3===0 && i%5===0 ? answer.push("FizzBuzz") 
        : i%3===0 ? answer.push("Fizz") 
        : i%5===0 ? answer.push("Buzz")
        : answer.push(i.toString())
    }
    return answer
};