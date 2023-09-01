/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  let l = 0
  let r = height.length  -1
  let res = -1
  let tmp = 0

  while (l < r)
  {
    tmp = (Math.min(height[l],height[r]) )* (r-l)
    if (tmp > res)
      res = tmp
    if (height[l] < height[r])
      l+=1
    else if (height[l] >= height[r])
      r-=1
  }
  return res
};