/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let newArr = new Array()
    nums.sort((a,b) => a-b)

    for (const [i,e] of nums.entries())
    {
        if (e > 0)
            break;
        
        if (i > 0 && e == nums[i-1])
            continue;

        let s = i+1
        let l = nums.length - 1
        while ( s < l )
        {
            let sumZero = nums[s] + nums[l] + e
            if (sumZero > 0)
                l -= 1
            else if (sumZero < 0)
                s += 1
            else{
                newArr.push([nums[s], nums[l], e])
                s += 1
                l -= 1
                while (nums[s] == nums[s -1] && s < l)
                    s+=1
            }
        }
    }
    return newArr
}