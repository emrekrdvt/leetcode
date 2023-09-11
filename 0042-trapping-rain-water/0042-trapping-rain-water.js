/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
    const len = height.length;
    let lMax= 0 
    let rMax= 0
    let left = 0
    let right= len -1
    let water = 0 

    while (left < right)
    {
        if (height[left] < height[right])
        {
            if(height[left] > lMax)
                lMax = height[left]
            else
                water += lMax - height[left]
            left++
        }
        else
        {
            if (height[right] > rMax)
                rMax = height[right]
            else
                water += rMax - height[right]
            right--
        }
    }
    return water
};