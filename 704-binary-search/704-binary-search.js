/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let low = 0
    let high = nums.length-1
    let mid
    while(low<=high){
         mid = Math.floor((high+low)/2)
        if (nums[mid]===target) return [mid]
        nums[mid]>target?high=mid-1:low=mid+1
    }
    return -1
};