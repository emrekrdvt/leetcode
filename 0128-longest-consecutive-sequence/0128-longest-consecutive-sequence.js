/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
    const mySet = new Set(nums)
    let len=0 
    let max =0

    for (let i of mySet)
    {
        if (!mySet.has(i-1))
        {
            len = 0
            while (mySet.has(i +len))
                len +=1
            max = Math.max(max, len)
        }
    }
    return max
};