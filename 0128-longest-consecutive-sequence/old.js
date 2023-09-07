/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
    nums.sort((a, b) => a - b)
    let len = 1
    let tmp = 1
    if (nums.length == 0)
        return 0

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[i - 1]) {
            if (nums[i] == nums[i - 1] + 1) {
                len += 1
            }
            else {
                tmp = Math.max(tmp, len)
                len = 1
            }
        }
    }
    return Math.max(tmp, len)
};
