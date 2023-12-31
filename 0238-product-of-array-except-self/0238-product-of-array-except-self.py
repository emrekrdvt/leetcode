class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        ret = [1] * len(nums)
        multi = 1

        for i in range(len(nums)):
            ret[i] = multi
            multi *= nums[i]

        multi = 1
        for i in range(len(nums) -1 , -1 ,-1):
            ret[i] *= multi
            multi *= nums[i]

        return ret