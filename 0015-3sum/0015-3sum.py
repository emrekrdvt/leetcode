class Solution:
    def threeSum(self, nums: List[int]) -> List[List[int]]:
        res = []
        nums.sort()

        for i,e in enumerate(nums):

            if (i>0 and e == nums[i-1]):
                continue
            
            l = i + 1
            r = len(nums) - 1
            while (l < r):
                sumx = e + nums[l] + nums[r]
                if (sumx > 0):
                    r-= 1
                elif sumx < 0:
                    l+=1
                else:
                    res.append([e,nums[l],nums[r]])
                    l+=1
                    r-=1
                    while (nums[l] == nums[l-1] and l < r):
                        l+=1
        return res

        