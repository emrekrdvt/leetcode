/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    const n = nums.length;
    let outputArr = new Array(n);
    let multi  = 1;

    for (let i = 0; i < n ; i++)
    {
        outputArr[i] = multi;
        multi *= nums[i]
    }
    multi = 1;
    for (let i = n-1; i >= 0 ; i--)
    {
        outputArr[i] *= multi;
        multi *= nums[i]
    }
    return outputArr;

};