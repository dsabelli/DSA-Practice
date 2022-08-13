/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    for (let num of nums){
        if (nums.filter((n)=>n===num).length>1)return true
    }
    return false
};