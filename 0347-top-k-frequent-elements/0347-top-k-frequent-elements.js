/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {

    const maHash = {}

    for (const key of nums)
    {
        if (!maHash[key])
            maHash[key] = 0
        else (maHash[key]) 
            maHash[key]++
    }

    const sortHash = []

    for (const hash in maHash)
        sortHash.push([hash, maHash[hash]])

    sortHash.sort((a,b) => b[1] - a[1]);


    const res = []

    for (let i = 0; i < k ; i++)
    {
        res.push(parseInt(sortHash[i][0]))
    }
    return res;

};