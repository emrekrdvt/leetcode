/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
    let lMax = []
    let rMax = []
    let cur = 0
    let water =0
    for (let i = 0; i < height.length - 1; i++) {
        lMax.push(cur)
        cur = Math.max(cur, height[i])
    }
    cur = 0
    for (let i = height.length - 1; i > -1; i--) {
        rMax.push(cur)
        cur = Math.max(cur, height[i])
    }
    rMax.reverse()
    for(let i=0;i < height.length - 1; i++)
    {
        min = Math.min(lMax[i],rMax[i])
        if(min - height[i] > 0)
        {
            water = water + min - height[i]
        }
    }
    return water
};