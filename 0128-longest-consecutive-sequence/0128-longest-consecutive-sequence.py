class Solution:
    def longestConsecutive(self, nums: List[int]) -> int:
        mySet = set(nums)
        longe = 0

        for i in mySet:
            if (i-1) not in mySet:
                len = 1
                while (i+len) in mySet:
                    len = len + 1
                longe = max(len,longe)
        return longe