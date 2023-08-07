/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var hash = {};

    for (let i = 0; i < nums.length; i++)
    {
        const num = nums[i];
        const diff = target - num;

        if (hash[diff] !== undefined)
        {
            return [hash[diff], i];
        }
        hash[num] = i;
    }
    return []
};